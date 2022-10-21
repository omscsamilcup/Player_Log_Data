//LiteLoaderScript Dev Helper
/// <reference path="d:\/Library/JS/Api.js" />

var plname = 'Show Player Use System, IP, Ping(console)'
var version = '2.0.0'
var author = "samilcup(OMSC team)"
ll.registerPlugin("Join Show data", "Player Join Show Player Data In Console", [2, 0, 0], `${author}`) 

mc.listen("onServerStarted", () => {
    mc.listen('onJoin', function(player) {
        var ip = {}
        let dv = player.getDevice()
        colorLog("yellow", `Player${player.name}Use System${dv.os},Player IP:${dv.ip},On Player Join Ping${dv.avgPing}`)
    })
    log(`${plname} Loaded Success！ Plugin Name:${plname}Plugin Version:${version} Author:${author}`)
    colorLog("green", `This Plugin Make By:samilcup！
===========================
█████  ██ ██  █████  █████
█   █  █ █ █  █      █
█   █  █ █ █  █████  █
█   █  █ █ █      █  █
█████  █ █ █  █████  █████
============================
            `)
})