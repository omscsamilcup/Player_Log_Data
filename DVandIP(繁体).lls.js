//LiteLoaderScript Dev Helper
/// <reference path="d:\/Library/JS/Api.js" />

var plname = 'OMSC顯示玩家加入設備和IP(console)'
var version = '2.0.0'
var author = "samilcup(OMSC團隊)"
ll.registerPlugin("加入顯示資料", "玩家加入時顯示玩家資料", [2, 0, 0], `${author}`); 

mc.listen("onServerStarted", () => {
    mc.listen('onJoin', function(player) {
        var ip = {}
        let dv = player.getDevice()
        colorLog("yellow", `玩家${player.name}使用設備${dv.os},玩家IP是:${dv.ip},玩家加入是的延遲是${dv.avgPing}`)
    })
    log(`${plname} 加載成功！ 插件名稱:${plname}插件版本:${version} 作者:${author}`)
    colorLog("green", `謝謝samilcup製作的玩家加入顯示設備和IP插件！
===========================
█████  ██ ██  █████  █████
█   █  █ █ █  █      █
█   █  █ █ █  █████  █
█   █  █ █ █      █  █
█████  █ █ █  █████  █████
============================
            `)
})