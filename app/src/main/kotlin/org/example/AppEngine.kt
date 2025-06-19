class AppEngine {
    val blockchain = BlockchainEngine()
    val zk = ZkCoinJoin()
    val lightning = BreezService()
    val liquid = LiquidBridge()

    fun getGreeting() = "Welcome to Firebolt SDK"
}
