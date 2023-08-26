import lume from "lume/mod.ts";
import terser from "lume/plugins/terser.ts";
import toml from "lume/plugins/toml.ts";
import eta from "lume/plugins/eta.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import postcss from "lume/plugins/postcss.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import remark from "lume/plugins/remark.ts"
import remarkToc from 'https://esm.sh/remark-toc'
import cssnano from  'npm:cssnano'
import inline from "lume/plugins/inline.ts"
import { format } from "https://deno.land/std@0.200.0/datetime/format.ts";

const site = lume({
    src:"./src"
});

site.use(postcss());
site.use(inline())
site.use(terser());
site.use(toml());
site.use(eta());
site.use(minifyHTML());
site.use(remark({
    remarkPlugin:[remarkToc],
}))
site.use(codeHighlight());
site.copy("static")
site.hooks.addPostcssPlugin(cssnano)
site.filter("readableDate",(date:Date)=>{
    return format(date,"yyyy年M月d日")
})
export default site;
