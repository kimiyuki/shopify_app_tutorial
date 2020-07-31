import { EmptyState, Layout, Page } from '@shopify/polaris'
//import { TitleBar } from '@shopify/app-bridge-react';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react'

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

class Index extends React.Component {
  state = { open: false }
  render() {
    return (
      <Page>
        <TitleBar
          title='sample app2'
          primaryAction={{
            content: 'Select product',
            onAction: () => this.setState({ open: true })
          }}
        />
        <ResourcePicker
          resourceType="Product"
          showVariants={false}
          open={this.state.open}
          onSelection={(resources) => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}
        />
        <Layout>
          <EmptyState
            heading="値引き"
            action={{
              content: '商品選択', onAction: () => this.setState({ open: true })
            }}
          ></EmptyState>
          <p>値引きする商品を選択してください</p>
        </Layout>
      </Page >
    );
  }
  handleSelection = (resources) => {
    const idsFromResources = resources.selection.map((product) => product.id);
    this.setState({ open: false })
    console.log(idsFromResources)
  }
}

export default Index;