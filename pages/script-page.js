import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Button, Card, Page, Layout, ResourceItem, Stack, ResourceList } from '@shopify/polaris'

const CREATE_SCRIPTTAG = gql`
    mutation scriptTagCreate($input: ScriptTagInput!) {
        scriptTagCreate(input: $input) {
           scriptTag {
             id
            }
           userErrors {
            field
            message
            }
        }
    }
`
const QUERY_SCRIPTTAGS = gql`
    query {
        scriptTags(first: 5) {
            edges {
                node {
                    id
                    src
                    displayScope
                }
            }
        }
    }
`

const DELETE_SCRIPTTAG = gql`
    mutation scriptTagDelete($id: ID!) {
        scriptTagDelete(id: $id) {
            deletedScriptTagId
            userErrors {
                field
                message
            }
        }
    }
`

var urlScriptTags=`https://46b89d7e107e.ngrok.io/test-script.js`;

function ScriptPage() {

    const [createScripts] = useMutation(CREATE_SCRIPTTAG);    
    const [deleteScripts] = useMutation(DELETE_SCRIPTTAG);
    const { loading, error, data } = useQuery(QUERY_SCRIPTTAGS);

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>

    console.log(data.scriptTags.edges);    

    return (
        <Page>
            <Layout>
                <Layout.Section>
                    <Card title="These are the ScriptTags" sectioned>
                        <p>
                            Create or Delete a ScriptTag
                        </p>
                    </Card>
                </Layout.Section>
                <Layout.Section secondary>
                    <Card title="Delete Tag" sectioned>
                        <Button 
                            primary
                            size="slim"
                            type="submit"
                            onClick={()=>{
                                createScripts({
                                    variables:{
                                        input:{
                                            src: urlScriptTags,
                                            displayScope: "ALL"
                                        }
                                    },
                                    refetchQueries: [{ query: QUERY_SCRIPTTAGS }]                                    
                                })
                            }}>
                        Create ScriptTag
                        </Button>
                    </Card>
                </Layout.Section>
                <Layout.Section>
                    <Card>
                        <ResourceList
                            showHeader
                            resourceName={{singular: 'Script', plural: 'Scripts'}}
                            items={data.scriptTags.edges}
                            renderItem={item=>{
                                return(
                                    <ResourceList.Item
                                        id={item.node.id}
                                    >
                                        <Stack>
                                            <Stack.Item>
                                                <p>
                                                    {item.node.id}
                                                </p>
                                            </Stack.Item>
                                            <Stack.Item>
                                                <Button type="submit" onClick={()=>{
                                                   deleteScripts({
                                                       variables:{
                                                            id: item.node.id
                                                       },
                                                       refetchQueries: [{ query: QUERY_SCRIPTTAGS }]                                    
                                                   }) 
                                                }}>
                                                Delete ScriptTag
                                                </Button>
                                            </Stack.Item>
                                        </Stack>
                                    </ResourceList.Item>
                                )
                            }}
                        />
                    </Card>
                </Layout.Section>
            </Layout>           
        </Page>

        // <div>
        //     <h1> These are the ScriptTags: </h1>
        //     <button
        //         type='submit'
        //         onClick={() => {
        //             createScripts({
        //                 variables: {
        //                     input:{
        //                         src: urlScriptTags,
        //                         displayScope: "ALL",
        //                     }                            
        //                 },
        //                 refetchQueries: [{ query: QUERY_SCRIPTTAGS }]
        //             })                                                                    
        //         }}>
        //         Create ScriptTag
        //     </button>

        //     {data.scriptTags.edges.map(
        //         item => {
        //             return (
        //                 <div key={item.node.id}>
        //                     <p>{item.node.id}</p>
        //                     <button 
        //                         type="submit"
        //                         onClick={()=>{
        //                             deleteScripts({
        //                                 variables: {                                            
        //                                     id: item.node.id                                            
        //                                 },                                      
        //                                 refetchQueries: [{query: QUERY_SCRIPTTAGS}]
        //                             })                                    
        //                         }}>
        //                     Delete ScriptTag
        //                     </button>
        //                 </div>
        //             )
        //         }
        //     )}
        // </div>
    )
}

export default ScriptPage;




