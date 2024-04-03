use yew::prelude::*;

#[derive(Clone, PartialEq, Properties)]
pub struct Props {
    pub markdown_data: String,
}

pub struct Markdown;

impl Component for Markdown {
    type Message = ();
    type Properties = Props;

    fn create(_ctx: &Context<Self>) -> Self {
        Self
    }

    fn view(&self, ctx: &Context<Self>) -> Html {
        let mut options = pulldown_cmark::Options::empty();
        options.insert(pulldown_cmark::Options::all());
        let parser = pulldown_cmark::Parser::new_ext(&ctx.props().markdown_data, options);
        let mut html_buf = String::new();
        pulldown_cmark::html::push_html(&mut html_buf, parser);

        let div = web_sys::window()
            .unwrap()
            .document()
            .unwrap()
            .create_element("div")
            .unwrap();
        div.set_inner_html(&html_buf);

        let node = web_sys::Node::from(div);
        let vnode = yew::virtual_dom::VNode::VRef(node);
        html! {
            <div class="markdown-body">
                {vnode}
            </div>
        }
    }
}
