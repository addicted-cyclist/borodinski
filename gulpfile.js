const { watch, series, parallel } = require("gulp")
const browserSync = require("browser-sync").create()

// Пути конфигурации
const path = require("./config/path.js")

// Задачи для подключения
const clear = require('./task/clear.js')
const html = require('./task/html.js')
const css = require('./task/css.js')
const img = require('./task/img.js')

// Сервер
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    })
}

// Наблюдение за изменениями
const watcher = () => {
    watch(path.html.watch, html).on("all", browserSync.reload)
    watch(path.css.watch, css).on("all", browserSync.reload)
    watch(path.img.watch, img).on("all", browserSync.reload)
img
}

// Задачи
exports.html = html
exports.css = css
exports.img = img

// Сборка для разработки
exports.dev = series(
    clear,
    parallel(html, css, img),
    parallel(watcher, server)
)

exports.build = series(
    clear,
    parallel(html, css, img)
)
