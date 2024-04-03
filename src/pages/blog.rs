use crate::components::footer::Footer;
use crate::components::layout::Layout;
use crate::components::markdown::Markdown;
use crate::components::navbar::Navbar;
use crate::components::title::Title;
use crate::util::fetch::fetch_text;
use crate::util::fetch::FetchState;
use crate::util::fetch::Msg;
use crate::util::var::BLOG_ROOT_URL;
use yew::prelude::*;

#[derive(PartialEq, Properties)]
pub struct Props {
    pub id: String,
}

pub struct Blog {
    meta: FetchState<String>,
}

impl Component for Blog {
    type Message = Msg;
    type Properties = Props;

    fn create(ctx: &Context<Self>) -> Self {
        ctx.link().send_message(Msg::GetState);
        Self {
            meta: FetchState::NotFetching,
        }
    }

    fn update(&mut self, ctx: &Context<Self>, msg: Self::Message) -> bool {
        let url = format!("{}/{}.md", BLOG_ROOT_URL, ctx.props().id);
        match msg {
            Msg::SetState(state) => {
                self.meta = state;
                true
            }
            Msg::GetState => {
                ctx.link().send_future(async move {
                    match fetch_text(&url).await {
                        Ok(s) => Msg::SetState(FetchState::Success(s)),
                        Err(_) => Msg::SetState(FetchState::Failed),
                    }
                });
                ctx.link().send_message(Msg::SetState(FetchState::Fetching));
                false
            }
        }
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        let content = match &self.meta {
            FetchState::NotFetching => html! { <></> },
            FetchState::Fetching => html! { <></> },
            FetchState::Success(meta) => {
                html! {
                    <Markdown markdown_data={meta.clone()}/>
                }
            }
            FetchState::Failed => html! { <></> },
        };
        html! {
            <div>
                <Navbar />
                  <Layout>
                    <Title title={"Blog"} subtitle={""} />
                    <div class="flex gap-6 mt-20 justify-center lg:col-span-2 col-span-3 border border-gray-100 rounded-lg p-4 bg-white grid lg:gap-6 gap-4">
                      {content}
                    </div>
                  </Layout>
                <Footer />
            </div>
        }
    }
}
