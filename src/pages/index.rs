use crate::components::footer::Footer;
use crate::components::navbar::Navbar;
use crate::icons::gist::IconGist;
use crate::icons::github::IconGithub;
use crate::icons::home::IconHome;
use crate::icons::kaggle::IconKaggle;
use crate::icons::linkedin::IconLinkedin;
use yew::prelude::*;

#[derive(PartialEq, Properties)]
pub struct Props;

pub struct IndexPage;

impl Component for IndexPage {
    type Message = ();
    type Properties = Props;

    fn create(_ctx: &Context<Self>) -> Self {
        Self
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        html! {
            <div>
              <Navbar />
                // <main class="lg:px-72 px-4 py-6 bg-blue-50">

                <IconGithub />

                <IconGist />

                <IconLinkedin />

                <IconHome />

                <IconKaggle />

                // </main>
              <Footer />
            </div>
        }
    }
}
