const { src, dest } = require("gulp")

// Пути конфигурации
const path = require("../config/path.js")
const app = require("../config/app.js")

// Плагины
const plumber = require("gulp-plumber")
const notify = require("gulp-notify")

const img = () => {
    return src(path.img.src)
        .pipe(plumber({
            errorHandler: notify.onError()
        }))
        .pipe(dest(path.img.dest))
}

module.exports = img