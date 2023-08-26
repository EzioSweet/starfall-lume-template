export const layout = "layout/home.eta"
export default  function *({search,paginate}){
    const pages = search.pages("category=post", 'date=desc')
    for (
        const page of paginate(pages, {
        url: (n) => (n === 1 ? '/' : `/home/${n}/`),
        size: 4,
    })
        ) {
        // 这东西会给对应的layout传一个url，pagination 对象，官网里啥都不写，tnnd
        yield page
    }
}
