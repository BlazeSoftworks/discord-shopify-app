import { EmptyState, Layout, Page } from '@shopify/polaris';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';
import store from 'store-js';
import ResourceListWithProducts from '../components/ResourceList';
import axios from 'axios'
import { url } from 'koa-router';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

class Index extends React.Component {

  state = { open: false };

  render() {
    const emptyState = !store.get('ids');
    return (
      <Page>
        <TitleBar
          primaryAction={{
            content: 'Select products',
            onAction: () => this.setState({ open: true }),
          }}
        />
        <ResourcePicker
          resourceType="Product"
          showVariants={false}
          open={this.state.open}
          onSelection={(resources) => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}
        />
        {emptyState ? (
        <Layout>
          <EmptyState
            heading="Select products to start"
            action={{
              content: 'Select products',
              onAction: () => this.setState({ open: true }),
            }}
            image={img}
          >
            <p>Select products and change their price temporarily</p>
          </EmptyState>
        </Layout>
        ) : (
        <ResourceListWithProducts />
      )}
      </Page >
    );
  }

  handleSelection = (resources) => {
    const idsFromResources = resources.selection.map((product) => product.id);
    this.setState({ open: false });
    store.set('ids', idsFromResources);

    const selectedProducts = resources.selection;

    deleteApiData();
    
    selectedProducts.map(selectedProduct => {      
      makeApiCall(selectedProduct);
    });

    //axios.get('/api/products').then(result=>console.log(result)).catch(error=>console.log(error));
  };
}

function deleteApiData() {
  const url = '/api/products';
  
  axios.delete(url);
}

async function makeApiCall(product) {
  const url = '/api/products';

  axios.post(url, product).then((result)=>{}).catch((error)=>{console.log(error.response)});            
}

export default Index;
