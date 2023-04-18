<template>
    <div>
        <p class="bg-green-500  focus:bg-green-500 focus:outline-none focus:ring focus:ring-green-300"> Socket Price {{ midPrice.mid }}</p>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useUserActions } from '@/stores/userActions'

const storeUser = useUserActions()
const reconnectInterval = 1000 * 10
let socketPrice = ref({ "symbol": "", "ts": "", "bid": 0, "ask": 0, "mid": 0 })
let midPrice = ref({ "symbol": "", "ts": "", "bid": 0, "ask": 0, "mid": 0 })
const connect = function () {
    let connectionWS = new WebSocket('wss://marketdata.tradermade.com/feedadv')
    connectionWS.onopen = function openConnection() {
        connectionWS.send("{\"userKey\":\"wsgWq8Xl-Xt4D8NndViQ\", \"symbol\":\"GBPUSD\"}")
    }

    connectionWS.onclose = function closeConnection() {
        console.log('socket close : will reconnect in ' + reconnectInterval)
        setTimeout(connect, reconnectInterval)
    }

    //TODO debounce to display info each 5 seconds
    connectionWS.onmessage = function incomingMessage(data) {
        socketPrice.value = data.data
        midPrice.value = JSON.parse(socketPrice.value)
        console.log(data.data)
    }
}


onMounted(() => {
    connect()
})


</script>
