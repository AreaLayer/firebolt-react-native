const { Keys, Client, Metadata, EventId, PublicKey, EventBuilder } = require("@nostr-dev-kit/ndk");

async function main() {
    let keys = Keys.generate();

    // Hex keys
    console.log("Public key (hex): ", keys.publicKey.toHex());
    console.log("Secret key (hex): ", keys.secretKey.toHex());

    // Bech32 keys
    console.log("Public key (bech32): ", keys.publicKey.toBech32());
    console.log("Secret key (bech32): ", keys.secretKey.toBech32());

    let client = new Client(keys);
    await client.addRelay("wss://relay.damus.io");
    await client.addRelay("wss://nostr.oxtr.dev");
    await client.addRelay("wss://nostr.bitcoiner.social");

    await client.connect();


    let metadata = new Metadata()
        .name("username")
        .user("user")
        .displayName("My Username")
        .about("Description")
        .picture("https://example.com/avatar.png")
        .banner("https://example.com/banner.png")
        .nip05("username@example.com")
        .lud16("yuki@getalby.com");

    await client.setMetadata(metadata);

    await client.publishTextNote("My first text note from NVDK", []);

    // Send custom event
    let event_id = EventId.fromBech32("note1z3lwphdc7gdf6n0y4vaaa0x7ck778kg638lk0nqv2yd343qda78sf69t6r");
    let public_key = PublicKey.fromBech32("npub14rnkcwkw0q5lnmjye7ffxvy7yxscyjl3u4mrr5qxsks76zctmz3qvuftjz");
    let event = EventBuilder.newReaction(event_id, public_key, "X").toEvent(keys);

    // Send custom event to all relays
    await client.sendEvent(event);

    // Send custom event to a specific previously added relay
    // await client.sendEventTo("wss://relay.damus.io", event);
}
main();
