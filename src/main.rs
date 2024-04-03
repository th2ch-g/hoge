use yew::prelude::*;
use yew_router::prelude::*;

mod components;
mod icons;
mod pages;
mod util;

struct App;

impl Component for App {
    type Message = ();
    type Properties = ();

    fn create(_ctx: &Context<Self>) -> Self {
        Self
    }

    fn update(&mut self, _ctx: &Context<Self>, _msg: Self::Message) -> bool {
        false
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        html! {
            <BrowserRouter>
                <main>
                    <Switch<Routes> render={switch} />
                </main>
            </BrowserRouter>
        }
    }
}

fn main() {
    yew::Renderer::<App>::new().render();
}

#[derive(Routable, PartialEq, Eq, Clone, Debug)]
enum Routes {
    #[at("/home")]
    Home,
    #[at("/home/works")]
    Works,
    #[at("/home/blog")]
    BlogList,
    #[at("/home/blog/:id")]
    Blog { id: String },
    #[at("/404")]
    #[not_found]
    NotFound,
}

fn switch(routes: Routes) -> Html {
    match routes {
        Routes::Home => html! { <pages::index::IndexPage /> },
        Routes::Works => html! { <pages::works::Works /> },
        Routes::BlogList => html! { <pages::blog_list::BlogList /> },
        Routes::Blog { id } => html! { <pages::blog::Blog id={id.clone()} /> },
        Routes::NotFound => html! { <pages::notfound::NotFound /> },
    }
}
