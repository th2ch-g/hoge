use crate::components::footer::Footer;
use crate::components::navbar::Navbar;
use crate::components::markdown::Markdown;
use yew::prelude::*;

#[derive(PartialEq, Properties)]
pub struct Props;

pub struct Blog;

impl Component for Blog {
    type Message = ();
    type Properties = Props;

    fn create(_ctx: &Context<Self>) -> Self {
        Self
    }

    fn view(&self, ctx: &Context<Self>) -> Html {
        html! {
            <div>
                <Navbar />
                    <Markdown markdown_data={include_str!("../../../test.md")}/>
                <Footer />
            </div>
        }
    }
}
