//LiteLoaderScript Dev Helper
/// <reference path="d:\/Library/JS/Api.js" />

var plname = 'OMSC显示玩家加入设备和IP(console)'
var version = '2.0.0'
var author = 'samilcup(OMSC团队)'
ll.registerPlugin(plname, '玩家进入伺服器console显示玩家的资料(LiteLoader(LL))', [2, 0, 0], `${author}`)

mc.listen("onServerStarted", () => {
    mc.listen("onJoin", function(player) {
        var ip = {}
        let dv = player.getDevice()
        colorLog("yellow", `玩家${player.name}使用设备${dv.os},玩家IP是:${dv.ip},玩家加入时的延迟:${dv.avgPing}`)
    })
    log(`${plname} 加载成功！ 插件名称:${plname}插件版本:${version} 作者:${author}`)
    colorLog("green", `samilcup制作的玩家加入显示设备和IP插件！
===========================
█████  ██ ██  █████  █████
█   █  █ █ █  █      █
█   █  █ █ █  █████  █
█   █  █ █ █      █  █
█████  █ █ █  █████  █████
============================
            `)
})