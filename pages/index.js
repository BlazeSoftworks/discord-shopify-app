import {
  Button,
  Card,
  Form,
  FormLayout,
  Layout,
  Page,
  SettingToggle,
  Stack,
  TextField,
  TextStyle,
  Avatar,
  Banner,
  Frame,
  Toast,
  DisplayText
} from '@shopify/polaris';
import gql from 'graphql-tag'
import React, { useState, useCallback } from 'react';
import { useQuery } from '@apollo/react-hooks';
import axios from 'axios';
import { set } from 'js-cookie';

const GET_STORE_NAME = gql`
  query getName{ 
    shop { 
      myshopifyDomain 
    }      
  }
`

// const GET_STORE_DISCOUNTS = gql`
//   query getDiscountCodes{
//     priceRules (first:10) {
//       edges {
//         node {
//           id
//           discountCodes (first:10) {
//             edges {
//               node {
//                 code
//                 id
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

function AnnotatedLayout() {
  const [idset, setId] = useState(false);
  const [textFieldValue, setTextFieldValue] = useState('');
  const [textFieldValueOld, setTextFieldValueOld] = useState('');
  const [textFieldValue1, setTextFieldValue1] = useState('');
  const [textFieldValueOld1, setTextFieldValueOld1] = useState('');
  const { loading, error, data } = useQuery(GET_STORE_NAME);
  const [first, setFirst] = useState(true);

  const handleTextFieldChange = useCallback(
    (value) => {
      if (/^\d+$/.test(value) || value == '')
        setTextFieldValue(value);
      console.log(textFieldValue);
    },
    [],
  );

  const handleTextFieldChange1 = useCallback(
    (value) => {
      if (/^\d+$/.test(value) || value == '')
        setTextFieldValue1(value);
      console.log(textFieldValue1);
    },
    [],
  );

  //toast
  const [active, setActive] = useState(false);

  const toastMarkup = active ? (
    <div style={{ zIndex: '999' }}>
      <Toast content="Settings Saved" onDismiss={() => { setActive(!active) }} />
    </div>
  ) : null;

  if (loading) return <div>Loading..</div>
  else if (error) return <div>{error.message}</div>

  // console.log(data.priceRules.edges[0].node.discountCodes.edges[0].node.id);
  // console.log(data.priceRules.edges[0].node.discountCodes.edges[0].node.code);

  var sURL = String(data.shop.myshopifyDomain).substr(0, String(data.shop.myshopifyDomain).length - 14)
  if (first) {
    axios.get(`/api/discordID/${sURL}`).then(result => {
      if (result.data.data.serverID != null) {
        setId(true);
        setTextFieldValue(result.data.data.serverID);
        setTextFieldValue1(result.data.data.channelID);
        setTextFieldValueOld(result.data.data.serverID);
        setTextFieldValueOld1(result.data.data.channelID);
      }
    }).catch(error => console.log(error));

    setFirst(false);
  }

  return (
    <Frame>
      <Page title="Discordify Server/Channel ID" >
        <Layout>
          {toastMarkup}
          <Layout.Section >
            <Banner
              status={(idset) ? "success" : "critical"}
              title={(idset) ? "Server/Channel ID Set" : "No Server/Channel ID Set"}
            >
            </Banner>
          </Layout.Section>
          <Layout.AnnotatedSection title="Step One" description={<p>Add Widgetbot to your server <a href="https://discord.com/oauth2/authorize?client_id=543225764036870167&scope=bot&permissions=537218112" target="_blank"><b>here</b></a>. Make sure you give Widgetbot all the permissions!</p>}>
            <Card sectioned >
              <img src="dis1.PNG" width="100%" height="410" />
              {/* <br />
              <Button primary size="slim" onClick={() => {
                window.open("https://discord.com/oauth2/authorize?client_id=543225764036870167&scope=bot&permissions=537218112", "_blank");
              }}>Add Widgetbot</Button> */}
            </Card>
          </Layout.AnnotatedSection>
          <Layout.AnnotatedSection title="Step Two" description="Type the ??guestmode command if you want people who don't have a discord account to be able to write messages. Type ??help for a full list of commands.">
            <Card sectioned >
              <img src="dis2.PNG" width="100%" height="410" />
            </Card>
          </Layout.AnnotatedSection>
          <Layout.AnnotatedSection title="Step Three" description='Type the ??crate command in the text channel you want to display in the widget after it loads. Copy the values from Server and Channel without the quotes, paste them bellow and submit. You can always come back here to change the IDs'>
            < Card sectioned >
              <img src="dis3.PNG" width="100%" height="410" />
            </Card>
          </Layout.AnnotatedSection>
          <Layout.Section>
            <Card sectioned>
              <Stack spacing="extraLoose">
                <Stack.Item fill>
                  <TextField
                    label="Server ID"
                    placeholder="Paste your Discord Server ID here"
                    value={textFieldValue}
                    onChange={handleTextFieldChange}
                  >
                  </TextField>
                </Stack.Item>
              </Stack>
              <br />
              <Stack spacing="extraLoose">
                <Stack.Item fill>
                  <TextField
                    label="Channel ID"
                    placeholder="Paste your Discord Channel ID here"
                    value={textFieldValue1}
                    onChange={handleTextFieldChange1}
                  >
                  </TextField>
                </Stack.Item>
              </Stack>
              <br />
              <Stack distribution="trailing">
                <Button
                  primary
                  disabled={((textFieldValue == '' || textFieldValueOld == textFieldValue) && (textFieldValue1 == '' || textFieldValueOld1 == textFieldValue1)) ? true : false}
                  type="submit"
                  onClick={() => {
                    if (textFieldValue != '') {
                      setId(true);
                      setActive(true);
                      makeApiCall({ serverID: textFieldValue, channelID: textFieldValue1 }, sURL);
                    }
                    else {
                      alert("Please paste in your ID first");
                    }
                  }}>
                  Submit
                </Button>
              </Stack>
            </Card>
          </Layout.Section>
        </Layout>
      </Page >
    </Frame>
  )

  async function makeApiCall(appInfo, sURL) {
    const url = `/api/discordID/${sURL}`;
    setTextFieldValueOld(textFieldValue);
    setTextFieldValueOld1(textFieldValue1);
    axios.post(url, appInfo).then((result) => { }).catch((error) => { console.log(error.response) });
  }
}

export default AnnotatedLayout;