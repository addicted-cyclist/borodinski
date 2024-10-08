const pathSrc = "./src"
const pathDest = "./public"

module.exports = {
    root: pathDest,

    html: {
        src: pathSrc + "/html/*.html",
        watch: pathSrc + "/html/**/*.html",
        dest: pathDest
    },

    pug: {
        src: pathSrc + "/pug/*.pug",
        watch: pathSrc + "/pug/**/*.pug",
        dest: pathDest
    },

    css: {
        src: pathSrc + "/css/*.css",
        watch: pathSrc + "/css/**/*.css",
        dest: pathDest + "/css"
    }, 

    img: {
        src: pathSrc + "/img/*.{png,jpg,jpeg,svg}",
        watch: pathSrc + "/img/**/*.{png,jpg,jpeg,svg}",
        dest: pathDest + "/img"
    }
}