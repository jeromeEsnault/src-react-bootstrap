import ApiLayout from './v2.5.0ForBootstrap_5.2/src/layouts/ApiLayout';
import DefaultLayout from './v2.5.0ForBootstrap_5.2/src/layouts';

export default function withLayout(Component) {
  return (props) => {
    const { pathname } = props.location;
    let Layout = DefaultLayout;
    if (
      pathname.startsWith('/getting-started') ||
      pathname.startsWith('/layout') ||
      pathname.startsWith('/components') ||
      pathname.startsWith('/utilities')
    ) {
      Layout = ApiLayout;
    }

    return (
      <Layout location={props.location}>
        <Component {...props} />
      </Layout>
    );
  };
}
