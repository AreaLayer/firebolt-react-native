package org.example

import kotlin.test.Test
import kotlin.test.assertEquals

class AppTest {

    private val zkCoinJoin = ZKCoinJoin()

    @Test
    fun testAddParticipant() {
        val result = zkCoinJoin.addParticipant("Alice")
        assertEquals("Participant Alice added to the CoinJoin.", result, "Failed to add participant to CoinJoin")
    }

    @Test
    fun testGenerateProof() {
        val result = zkCoinJoin.generateProof("Alice")
        assertEquals("Generated Zero-Knowledge proof for Alice.", result, "Failed to generate Zero-Knowledge proof")
    }

    @Test
    fun testPerformCoinJoin() {
        val result = zkCoinJoin.performCoinJoin()
        assertEquals("CoinJoin completed using Zero-Knowledge proofs.", result, "Failed to perform CoinJoin process")
    }

    @Test
    fun testGreeting() {
        val app = App()
        assertEquals("Hello World!", app.greeting, "Greeting did not match expected output")
    }
}
