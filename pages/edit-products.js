import {
  Banner,
  Card,
  DisplayText,
  Form,
  FormLayout,
  Frame,
  Layout,
  Page,
  PageActions,
  TextField,
  Toast,
  Image,
} from '@shopify/polaris';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import store from 'store-js';

const UPDATE_PRICE = gql`
  mutation productUpdates($input: ProductInput!) {
    productUpdate(input: $input) {
      product {
        id
        descriptionHtml
      }
    }
  }
`;

class EditProduct extends React.Component {
  state = {
    discount: '',
    price: '',
    variantId: '',
    descriptionHtml: "",
    showToast: false,
  };

  componentDidMount() {    
    this.setState({ discount: this.itemToBeConsumed() });    
  }

  render() {
    const { name, price, discount, variantId, descriptionHtml, id } = this.state;

    return (
      <Mutation mutation={UPDATE_PRICE}>
        {(handleSubmit, { error, data }) => {
          const showError = error && (
            <Banner status="critical">{error.message}</Banner>
          );
          const showToast = data && data.productUpdate && (
            <Toast
              content={this.state.id}
              onDismiss={() => this.setState({ showToast: false })}
            />
          );
          return (
            <Frame>
              <Page>
                <Layout>
                  {showToast}
                  <Layout.Section>
                    {showError}
                  </Layout.Section>
                  <Layout.Section>
                    <DisplayText size="large">{name}</DisplayText>
                    <Form>
                      <Card sectioned>
                        <FormLayout>
                          <FormLayout.Group>                          
                            <TextField
                              prefix="$"
                              value={price}
                              disabled={true}
                              label="Original price"
                              type="price"
                            />
                            <TextField
                              prefix="$"
                              value={discount}
                              onChange={this.handleChange('discount')}
                              label="Discounted price"
                              type="discount"
                            />
                            <TextField
                              value={descriptionHtml}
                              onChange={this.handleChange2('descriptionHtml')}
                              label="Description"
                              type="description"
                            />                                                                 

                            <Image src="/express_checkout.png" alt="my image" />
                            <Image src="/fast_delivery.png" alt="my image" />

                          </FormLayout.Group>
                          <p>
                            This sale price will expire in two weeks
                          </p>
                        </FormLayout>                        
                      </Card>
                      <PageActions
                        primaryAction={[
                          {
                            content: 'Save',
                            onAction: () => {
                              const productVariableInput = {
                                id: variantId,
                                price: discount,                                                              
                              };

                              const productVariableInput2 = {
                                id: id,
                                descriptionHtml: "<Image src=\"https://21e72925c524.ngrok.io/express_checkout.png\" alt=\"my image\">" + 
                                "<Image src=\"https://21e72925c524.ngrok.io/fast_delivery.png\" alt=\"my images\" \/>" + descriptionHtml,                                                                
                              };

                              handleSubmit({
                                variables: { input: productVariableInput2 },
                              });
                            },
                          },
                        ]}
                        secondaryActions={[
                          {
                            content: 'Remove discount'
                          },
                        ]}
                      />
                    </Form>
                  </Layout.Section>
                </Layout>
              </Page>
            </Frame>
          );
        }}
      </Mutation>
    );
  }

  handleChange = (field) => {
    return (value) => this.setState({ [field]: value });
  };

  handleChange2 = (field) => {
    return (value) => this.setState({ [field]: value });
  };

  itemToBeConsumed = () => {
    const item = store.get('item');    
    const price = item.variants.edges[0].node.price;
    const variantId = item.variants.edges[0].node.id;
    const discounter = price * 0.1;
    const descriptionHtml = item.descriptionHtml
    const id = item.id;

    this.setState({ price, variantId, descriptionHtml, id});

    return (price - discounter).toFixed(2);
  };
}

export default EditProduct;
