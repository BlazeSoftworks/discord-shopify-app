import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { TextField, Button, Card, Page, Layout, ResourceItem, Stack, ResourceList, Checkbox, DisplayText, Icon, ButtonGroup, RadioButton, Sticky, Banner, ColorPicker, Toast, Frame } from '@shopify/polaris'
import { TitleBar } from '@shopify/app-bridge-react'
import './style.css'
import { useState } from 'react';
import { CircleAlertMajorMonotone, CircleTickMajorMonotone } from '@shopify/polaris-icons';
import axios from 'axios'
import { createApp } from '@shopify/app-bridge'
import { ContextualSaveBar } from '@shopify/app-bridge/actions';
import { set } from 'js-cookie';
import { findBreakingChanges } from 'graphql';
import { buildResolveInfo } from 'graphql/execution/execute';

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
        shop {
            myshopifyDomain
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
const GET_STORE_NAME = gql`
    query getName { 
        shop 
        { 
        myshopifyDomain 
        }
    }
`
const CREATE_DISCOUNTCODE = gql`
    mutation discountCodeBasicCreate($basicCodeDiscount: DiscountCodeBasicInput!) {
        discountCodeBasicCreate(basicCodeDiscount: $basicCodeDiscount) {
        codeDiscountNode {
            id
        }        
      }
    }
`

var urlScriptTags = `https://95dd90e8ca83.ngrok.io/test-script.js`;

function ScriptPage() {

    const [createScripts] = useMutation(CREATE_SCRIPTTAG);
    const [deleteScripts] = useMutation(DELETE_SCRIPTTAG);
    const [createDiscount] = useMutation(CREATE_DISCOUNTCODE);
    const { loading, error, data } = useQuery(QUERY_SCRIPTTAGS);
    // const [enabled, setEnabled] = useState(false);
    const [pressedObject, setPressedObject] = useState({
        button1: false,
        button2: false,
        button3: false,
        button4: true,
    });
    const [pressedObject2, setPressedObject2] = useState({
        button5: false,
        button6: false,
        button7: false,
        button8: true,
    });
    const [mobileVal, setMobileVal] = useState(true);
    const [desktopVal, setDesktopVal] = useState(true);
    const [logoPressedObject, setLogoPressedObject] = useState({
        logo1: true,
        logo2: false,
        logo3: false
    });
    const [themeDark, setThemeDark] = useState(true);
    const [positionDesktop, setPositionDesktop] = useState({
        'yAxis': 'bottom',
        'xAxis': 'right',
    });
    const [positionMobile, setPositionMobile] = useState({
        'yAxis': 'bottom',
        'xAxis': 'right',
    });
    // const [logoUrl, setLogoUrl] = useState('https://discord.com/assets/41484d92c876f76b20c7f746221e8151.svg');
    // const [themeName, setThemeName] = useState('dark');
    const [color, setColor] = useState({
        hue: 227,
        brightness: 0.65,
        saturation: 0.58,
    });
    function setColorPlus(col) {
        setColor(col);
        setWidget({
            desktopPosition: positionDesktop,
            mobilePosition: positionMobile,
            notificationText: notificationValue,
            notificationTimeout: timeoutValue,
            notificationAvatar: avatarValue,
            mobile: true,
            desktop: true,
            color: hslToHex(color.hue, color.saturation, color.brightness)
        })
        // console.log(color);
        // console.log(hslToHex(color.hue, color.saturation, color.brightness));
    }
    const [widgetObj, setWidget] = useState({
        desktopPosition: {
            'yAxis': 'bottom',
            'xAxis': 'right',
        },
        mobilePosition: {
            'yAxis': 'bottom',
            'xAxis': 'right',
        },
        notificationText: '[Join](https://discord.gg/3FKvVwH) our Discord Server!',
        notificationTimeout: 2000,
        notificationAvatar: 'https://cdn.discordapp.com/embed/avatars/0.png',
        color: '#7289DA',
        mobile: true,
        desktop: true
    });

    const [valID, setValID] = useState('');
    const [channelID, setChannelID] = useState('');
    const [first, setFirst] = useState(true);

    const [notificationValue, setNotificationValue] = useState('[Join](https://discord.gg/3FKvVwH) our Discord Server!');
    const [timeoutValue, setTimeoutValue] = useState('2000');
    const [avatarValue, setAvatarValue] = useState('https://cdn.discordapp.com/embed/avatars/0.png');

    const [desktopPreview, setDesktopPreview] = useState(true);
    const [firstRender, setFirstRender] = useState(true);

    //toast
    const [active, setActive] = useState(false);

    const toastMarkup = active ? (
        <div style={{ zIndex: '999' }}>
            <Toast content="Settings Saved" onDismiss={() => { setActive(!active) }} />
        </div>
    ) : null;

    function buttonPressed(i) {
        if (pressedObject[i] == true)
            return true;
        return false;
    }

    function buttonPressed2(i) {
        if (pressedObject2[i] == true)
            return true;
        return false;
    }

    const handleClick = (i) => {
        var pos = positionDesktop;
        var pos2 = positionMobile;

        if (buttonPressed(i))
            return;
        else if (i == 'button1') {
            setPressedObject({ button1: true, button2: false, button3: false, button4: false, });
            setPositionDesktop(pos = {
                'yAxis': 'top',
                'xAxis': 'left',
            });
        }
        else if (i == 'button2') {
            setPressedObject({ button1: false, button2: true, button3: false, button4: false, });
            setPositionDesktop(pos = {
                'yAxis': 'top',
                'xAxis': 'right',
            });
        }
        else if (i == 'button3') {
            setPressedObject({ button1: false, button2: false, button3: true, button4: false, });
            setPositionDesktop(pos = {
                'yAxis': 'bottom',
                'xAxis': 'left',
            });
        }
        else if (i == 'button4') {
            setPressedObject(pos = { button1: false, button2: false, button3: false, button4: true, });
            setPositionDesktop({
                'yAxis': 'bottom',
                'xAxis': 'right',
            });
        }

        else if (buttonPressed2(i))
            return;
        else if (i == 'button5') {
            setPressedObject2({ button5: true, button6: false, button7: false, button8: false, });
            setPositionMobile(pos2 = {
                'yAxis': 'top',
                'xAxis': 'left',
            });
        }
        else if (i == 'button6') {
            setPressedObject2({ button5: false, button6: true, button7: false, button8: false, });
            setPositionMobile(pos2 = {
                'yAxis': 'top',
                'xAxis': 'right',
            });
        }
        else if (i == 'button7') {
            setPressedObject2({ button5: false, button6: false, button7: true, button8: false, });
            setPositionMobile(pos2 = {
                'yAxis': 'bottom',
                'xAxis': 'left',
            });
        }
        else if (i == 'button8') {
            setPressedObject2({ button5: false, button6: false, button7: false, button8: true, });
            setPositionMobile(pos2 = {
                'yAxis': 'bottom',
                'xAxis': 'right',
            });
        }

        setWidget({
            desktopPosition: pos,
            mobilePosition: pos2,
            notificationText: notificationValue,
            notificationTimeout: timeoutValue,
            notificationAvatar: avatarValue,
            mobile: mobileVal,
            desktop: desktopVal,
            color: hslToHex(color.hue, color.saturation, color.brightness)
        })
    }

    function returnIframe(desktop) {
        if (valID != '') {
            var script = document.createElement("script");

            script.id = "widgetbotscript"
            script.type = "text/javascript";
            script.src = "https://cdn.jsdelivr.net/npm/@widgetbot/crate@3";
            script.text = `
            var crate = new Crate({
                server: '${valID}', 
                channel: '${channelID}', 
                location: ["${(desktop) ? widgetObj.desktopPosition.yAxis : widgetObj.mobilePosition.yAxis}", "${(desktop) ? widgetObj.desktopPosition.xAxis : widgetObj.mobilePosition.xAxis}"],                                
                shard: 'https://e.widgetbot.io',                        
                color: '${widgetObj.color}',
                defer: true,                        
            })
            //crate.options.color = '#'+Math.random().toString(16).slice(2, 8);                                
            crate.notify({
                content: '${widgetObj.notificationText}',
                timeout: ${widgetObj.notificationTimeout},
                avatar: '${widgetObj.notificationAvatar}'                        
              }) 
            `

            if (document.getElementById('widgetbotiframe') != undefined)
                document.getElementById('widgetbotiframe').remove();

            var iframe = document.createElement('iframe');
            iframe.id = "widgetbotiframe";
            iframe.width = "100%";
            iframe.height = "525px";
            iframe.style.border = "none";

            setTimeout(() => {
                iframe.contentDocument.getElementsByTagName('head')[0].appendChild(script);
            }, 500);

            document.getElementById("previewdiv").appendChild(iframe);
        }

        else {
            return (
                <div>
                    <Banner
                        status="critical"
                        title="Please go to Discordify Server/Channel ID and complete the setup first"
                    >
                    </Banner>
                    <br />
                    <br />
                </div>
            )
        }
    }

    function returnFirstIframe() {
        if (firstRender) {
            if (valID != '') {
                var script = document.createElement("script");

                script.id = "widgetbotscript"
                script.type = "text/javascript";
                script.src = "https://cdn.jsdelivr.net/npm/@widgetbot/crate@3";
                script.text = `
            var crate = new Crate({
                server: '${valID}', 
                channel: '${channelID}',
                location: ["bottom", "right"],                                
                shard: 'https://e.widgetbot.io',                        
                color: '#7289DA',
                defer: true,                        
            })
            //crate.options.color = '#'+Math.random().toString(16).slice(2, 8);                                
            crate.notify({
                content: '[Join](https://discord.gg/3FKvVwH) our Discord Server!',
                timeout: 2000,
                avatar: 'https://cdn.discordapp.com/embed/avatars/0.png'                        
              }) 
            `

                if (document.getElementById('widgetbotiframe') != undefined)
                    document.getElementById('widgetbotiframe').remove();

                var iframe = document.createElement('iframe');
                iframe.id = "widgetbotiframe";
                iframe.width = "100%";
                iframe.height = "525px";
                iframe.style.border = "none";

                setTimeout(() => {
                    try {
                        iframe.contentDocument.getElementsByTagName('head')[0].appendChild(script);
                    } catch{

                    }
                }, 500);

                document.getElementById("previewdiv").appendChild(iframe);
            }
            else {
                return (
                    <div>
                        <Banner
                            status="critical"
                            title="Please go to Discordify Server/Channel ID and complete the setup first"
                        >
                        </Banner>
                        <br />
                        <br />
                    </div>
                )
            }

            setTimeout(() => {
                setFirstRender(false);
            }, 1000);
        }
    }

    async function makeApiCall(appInfo, sURL) {
        const url = `/api/widget/${sURL}`;

        axios.post(url, appInfo).then((result) => { }).catch((error) => { console.log(error.response) });
    }

    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    function hexToHsl(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

        var r = parseInt(result[1], 16);
        var g = parseInt(result[2], 16);
        var b = parseInt(result[3], 16);

        r /= 255, g /= 255, b /= 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;

        if (max == min) {
            h = s = 0; // achromatic
        } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }

        s = s * 100;
        s = Math.round(s);
        l = l * 100;
        l = Math.round(l);
        h = Math.round(360 * h);

        return { h, s, l };
    }

    function hslToHex(h, s, l) {
        h /= 360;
        //s /= 100;
        //l /= 100;
        let r, g, b;
        if (s === 0) {
            r = g = b = l; // achromatic
        } else {
            const hue2rgb = (p, q, t) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            };
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }
        const toHex = x => {
            const hex = Math.round(x * 255).toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        };
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>

    const shopURL = String(data.shop.myshopifyDomain).substr(0, String(data.shop.myshopifyDomain).length - 14);

    // axios.get(`/api/widget/${shopURL}`).then(result => {
    //     if (result.data.data != null) {
    //         setWidget(result.data.data);
    //         console.log(result.data.data);
    //     }
    // }).catch(error => console.log(error));   

    if (first) {
        axios.get(`/api/discordID/${shopURL}`).then(result => {
            if (result.data.data.serverID != null) {
                setValID(result.data.data.serverID);
                setChannelID(result.data.data.channelID);
                console.log(result.data.data.serverID);
            }
        }).catch(error => console.log(error));

        fetch(`/api/widget/${shopURL}`)
            .then(res => res.json())
            .then(data => {
                var widget = data.data;
                if (widget != null) {
                    if (widget.desktopPosition.yAxis == 'top' && widget.desktopPosition.xAxis == 'left') {
                        setPressedObject({ button1: true, button2: false, button3: false, button4: false, });
                        setPositionDesktop({
                            'yAxis': 'top',
                            'xAxis': 'left',
                        });
                    }
                    else if (widget.desktopPosition.yAxis == 'top' && widget.desktopPosition.xAxis == 'right') {
                        setPressedObject({ button1: false, button2: true, button3: false, button4: false, });
                        setPositionDesktop({
                            'yAxis': 'top',
                            'xAxis': 'right',
                        });
                    }
                    else if (widget.desktopPosition.yAxis == 'bottom' && widget.desktopPosition.xAxis == 'left') {
                        setPressedObject({ button1: false, button2: false, button3: true, button4: false, });
                        setPositionDesktop({
                            'yAxis': 'bottom',
                            'xAxis': 'left',
                        });
                    }
                    else if (widget.desktopPosition.yAxis == 'bottom' && widget.desktopPosition.xAxis == 'right') {
                        setPressedObject({ button1: false, button2: false, button3: false, button4: true, });
                        setPositionDesktop({
                            'yAxis': 'bottom',
                            'xAxis': 'right',
                        });
                    }

                    if (widget.mobilePosition.yAxis == 'top' && widget.mobilePosition.xAxis == 'left') {
                        setPressedObject2({ button5: true, button6: false, button7: false, button8: false, });
                        setPositionMobile({
                            'yAxis': 'top',
                            'xAxis': 'left',
                        });
                    }
                    else if (widget.mobilePosition.yAxis == 'top' && widget.mobilePosition.xAxis == 'right') {
                        setPressedObject2({ button4: false, button6: true, button7: false, button8: false, });
                        setPositionMobile({
                            'yAxis': 'top',
                            'xAxis': 'right',
                        });
                    }
                    else if (widget.mobilePosition.yAxis == 'bottom' && widget.mobilePosition.xAxis == 'left') {
                        setPressedObject2({ button5: false, button6: false, button7: true, button8: false, });
                        setPositionMobile({
                            'yAxis': 'bottom',
                            'xAxis': 'left',
                        });
                    }
                    else if (widget.mobilePosition.yAxis == 'bottom' && widget.mobilePosition.xAxis == 'right') {
                        setPressedObject2({ button5: false, button6: false, button7: false, button8: true, });
                        setPositionMobile({
                            'yAxis': 'bottom',
                            'xAxis': 'right',
                        });
                    }

                    //FINISH DIS AND DO THE MARKUP LANG THING [text](link)

                    console.log(widget.color);

                    var ccolor = hexToHsl(widget.color);

                    console.log(ccolor);

                    setColorPlus({ hue: ccolor.h, saturation: (ccolor.s / 100), brightness: (ccolor.l / 100) });

                    console.log(color);
                }

                console.log(data.data);

                setWidget({
                    desktopPosition: positionDesktop,
                    mobilePosition: positionMobile,
                    notificationText: notificationValue,
                    notificationTimeout: timeoutValue,
                    notificationAvatar: avatarValue,
                    mobile: mobileVal,
                    desktop: desktopVal,
                    color: hslToHex(color.hue, color.saturation, color.brightness)
                })

                makeApiCall(widgetObj, shopURL);
            }).catch(error => console.log(error));
        setFirst(false);
        console.log(color);
    }

    return (
        <Frame>
            <Page title="Widget Settings" >
                <Layout>
                    {toastMarkup}
                    <Layout.Section>
                        <Card sectioned>
                            <Stack alignment="center" spacing="extraLoose">
                                <Stack.Item fill>
                                    {((data.scriptTags.edges[0] != undefined)) ? <Stack alignment="center"><Icon source={CircleTickMajorMonotone} /><DisplayText size="small">Discord Widget is <b style={{ color: '#50b83c' }}>enabled</b></DisplayText></Stack> : <Stack alignment="center"><Icon source={CircleAlertMajorMonotone} /><DisplayText size="small">Discord Widget is <b style={{ color: '#de3618' }}>disabled</b></DisplayText></Stack>}
                                </Stack.Item>
                                <Stack.Item>
                                    <label className="switch">
                                        {(valID != '') ?
                                            <input type="checkbox" checked={(data.scriptTags.edges[0] != undefined)} onChange={() => {
                                                if (valID != '') {
                                                    if (!(data.scriptTags.edges[0] != undefined))
                                                        createScripts({
                                                            variables: {
                                                                input: {
                                                                    src: urlScriptTags,
                                                                    displayScope: "ALL"
                                                                }
                                                            },
                                                            refetchQueries: [{ query: QUERY_SCRIPTTAGS }]
                                                        })
                                                    else if ((data.scriptTags.edges[0] != undefined))
                                                        deleteScripts({
                                                            variables: {
                                                                id: data.scriptTags.edges[0].node.id
                                                            },
                                                            refetchQueries: [{ query: QUERY_SCRIPTTAGS }]
                                                        })
                                                    // setEnabled(!enabled);
                                                }
                                            }} />
                                            : ''}
                                        {(valID != '') ? <span className="slider round"></span> : ''}
                                    </label>
                                </Stack.Item>
                            </Stack>
                        </Card>
                    </Layout.Section>
                </Layout>
                <br />
                <Layout>
                    <Layout.Section secondary>
                        <Card sectioned title={<DisplayText size="small"><b>Device Settings</b></DisplayText>}>
                            <p>Show on</p>
                            <br />
                            <Stack vertical>
                                <RadioButton
                                    label="Desktop"
                                    checked={desktopVal && !mobileVal}
                                    onChange={() => {
                                        setWidget({
                                            desktopPosition: positionDesktop,
                                            mobilePosition: positionMobile,
                                            notificationText: notificationValue,
                                            notificationTimeout: timeoutValue,
                                            notificationAvatar: avatarValue,
                                            mobile: false,
                                            desktop: true,
                                            color: hslToHex(color.hue, color.saturation, color.brightness)
                                        })
                                        setMobileVal(false);
                                        setDesktopVal(true);
                                    }}
                                />
                                <RadioButton
                                    label="Mobile"
                                    checked={mobileVal && !desktopVal}
                                    onChange={() => {
                                        setWidget({
                                            desktopPosition: positionDesktop,
                                            mobilePosition: positionMobile,
                                            notificationText: notificationValue,
                                            notificationTimeout: timeoutValue,
                                            notificationAvatar: avatarValue,
                                            mobile: true,
                                            desktop: false,
                                            color: hslToHex(color.hue, color.saturation, color.brightness)
                                        })
                                        setMobileVal(true);
                                        setDesktopVal(false);
                                    }}
                                />
                                <RadioButton
                                    label="Both"
                                    checked={desktopVal && mobileVal}
                                    onChange={() => {
                                        setWidget({
                                            desktopPosition: positionDesktop,
                                            mobilePosition: positionMobile,
                                            notificationText: notificationValue,
                                            notificationTimeout: timeoutValue,
                                            notificationAvatar: avatarValue,
                                            mobile: true,
                                            desktop: true,
                                            color: hslToHex(color.hue, color.saturation, color.brightness)
                                        })
                                        setMobileVal(true);
                                        setDesktopVal(true);
                                    }}
                                />
                            </Stack>
                            <br />
                            <Stack spacing="extraTight" distribution="center">
                                <DisplayText size="small">Desktop Placement</DisplayText>
                                <ButtonGroup>
                                    <Button pressed={buttonPressed('button1')} onClick={() => { handleClick('button1') }}>
                                        <div className="grid-container">
                                            <div className="grid-item" style={{ backgroundColor: '#7289DA' }}></div>
                                            <div className="grid-item"></div>
                                            <div className="grid-item"></div>
                                            <div className="grid-item"></div>
                                        </div>
                                    </Button>
                                    <br />
                                    <Button pressed={buttonPressed('button2')} onClick={() => { handleClick('button2') }}>
                                        <div className="grid-container">
                                            <div className="grid-item"></div>
                                            <div className="grid-item" style={{ backgroundColor: '#7289DA' }}></div>
                                            <div className="grid-item"></div>
                                            <div className="grid-item"></div>
                                        </div>
                                    </Button>
                                </ButtonGroup>
                            </Stack>
                            <br />
                            <Stack distribution="center">
                                <ButtonGroup>
                                    <Button pressed={buttonPressed('button3')} onClick={() => { handleClick('button3') }}>
                                        <div className="grid-container">
                                            <div className="grid-item"></div>
                                            <div className="grid-item"></div>
                                            <div className="grid-item" style={{ backgroundColor: '#7289DA' }}></div>
                                            <div className="grid-item"></div>
                                        </div>
                                    </Button>
                                    <br />
                                    <Button pressed={buttonPressed('button4')} onClick={() => { handleClick('button4') }}>
                                        <div className="grid-container">
                                            <div className="grid-item"></div>
                                            <div className="grid-item"></div>
                                            <div className="grid-item"></div>
                                            <div className="grid-item" style={{ backgroundColor: '#7289DA' }}></div>
                                        </div>
                                    </Button>
                                </ButtonGroup>
                            </Stack>
                            <br />
                            <Stack spacing="extraTight" distribution="center">
                                <DisplayText size="small">Mobile Placement</DisplayText>
                                <ButtonGroup>
                                    <Button pressed={buttonPressed2('button5')} onClick={() => { handleClick('button5') }}>
                                        <div className="grid-container">
                                            <div className="grid-item" style={{ backgroundColor: '#7289DA' }}></div>
                                            <div className="grid-item"></div>
                                            <div className="grid-item"></div>
                                            <div className="grid-item"></div>
                                        </div>
                                    </Button>
                                    <br />
                                    <Button pressed={buttonPressed2('button6')} onClick={() => { handleClick('button6') }}>
                                        <div className="grid-container">
                                            <div className="grid-item"></div>
                                            <div className="grid-item" style={{ backgroundColor: '#7289DA' }}></div>
                                            <div className="grid-item"></div>
                                            <div className="grid-item"></div>
                                        </div>
                                    </Button>
                                </ButtonGroup>
                            </Stack>
                            <br />
                            <Stack distribution="center">
                                <ButtonGroup>
                                    <Button pressed={buttonPressed2('button7')} onClick={() => { handleClick('button7') }}>
                                        <div className="grid-container">
                                            <div className="grid-item"></div>
                                            <div className="grid-item"></div>
                                            <div className="grid-item" style={{ backgroundColor: '#7289DA' }}></div>
                                            <div className="grid-item"></div>
                                        </div>
                                    </Button>
                                    <br />
                                    <Button pressed={buttonPressed2('button8')} onClick={() => { handleClick('button8') }}>
                                        <div className="grid-container">
                                            <div className="grid-item"></div>
                                            <div className="grid-item"></div>
                                            <div className="grid-item"></div>
                                            <div className="grid-item" style={{ backgroundColor: '#7289DA' }}></div>
                                        </div>
                                    </Button>
                                </ButtonGroup>
                            </Stack>
                        </Card>
                        <Card sectioned title={<DisplayText size="small"><b>Appearance Settings</b></DisplayText>}>
                            <Stack distribution="center" vertical >
                                <ColorPicker onChange={setColorPlus} color={color} />
                                <Button onClick={() => {
                                    setColorPlus({ hue: 227, saturation: 0.58, brightness: 0.65 });
                                }}>
                                    Set Discord Purple Color
                                </Button>
                            </Stack>

                            {/* <p>Widget Logo</p>
                        <br />
                        <div style={{ backgroundColor: '#99aab5', borderRadius: '10px' }}>
                            <Stack spacing="tight" distribution="center" alignment="center">
                                <img className="not-select" src="https://discord.com/assets/1c8a54f25d101bdc607cec7228247a9a.svg" onClick={() => {
                                    setWidget({
                                        desktopPosition: positionDesktop,
                                        mobilePosition: positionMobile,
                                        logo: 'https://discord.com/assets/1c8a54f25d101bdc607cec7228247a9a.svg',
                                        theme: themeName,
                                        mobile: mobileVal,
                                        desktop: desktopVal
                                    })
                                    setLogoPressedObject({ logo1: true, logo2: false, logo3: false });
                                    setLogoUrl('https://discord.com/assets/1c8a54f25d101bdc607cec7228247a9a.svg');
                                }} width={(logoPressedObject.logo1) ? "80" : "60"} />
                                <img className="not-select" src="https://discord.com/assets/41484d92c876f76b20c7f746221e8151.svg" onClick={() => {
                                    setWidget({
                                        desktopPosition: positionDesktop,
                                        mobilePosition: positionMobile,
                                        logo: 'https://discord.com/assets/41484d92c876f76b20c7f746221e8151.svg',
                                        theme: themeName,
                                        mobile: mobileVal,
                                        desktop: desktopVal
                                    })
                                    setLogoPressedObject({ logo1: false, logo2: true, logo3: false });
                                    setLogoUrl('https://discord.com/assets/41484d92c876f76b20c7f746221e8151.svg');
                                }} width={(logoPressedObject.logo2) ? "80" : "60"} />
                                <img className="not-select" src="https://discord.com/assets/f8389ca1a741a115313bede9ac02e2c0.svg" onClick={() => {
                                    setWidget({
                                        desktopPosition: positionDesktop,
                                        mobilePosition: positionMobile,
                                        logo: 'https://discord.com/assets/f8389ca1a741a115313bede9ac02e2c0.svg',
                                        theme: themeName,
                                        mobile: mobileVal,
                                        desktop: desktopVal
                                    })
                                    setLogoPressedObject({ logo1: false, logo2: false, logo3: true });
                                    setLogoUrl('https://discord.com/assets/f8389ca1a741a115313bede9ac02e2c0.svg');
                                }} width={(logoPressedObject.logo3) ? "80" : "60"} />
                            </Stack>
                        </div>
                        <br />
                        <p>Widget Theme</p>
                        <br />
                        <ButtonGroup segmented>
                            <Button pressed={themeDark} onClick={() => {
                                setWidget({
                                    desktopPosition: positionDesktop,
                                    mobilePosition: positionMobile,
                                    logo: logoUrl,
                                    theme: 'dark',
                                    mobile: mobileVal,
                                    desktop: desktopVal
                                })
                                setThemeName("dark");
                                setThemeDark(true);
                            }}>Dark</Button>
                            <Button pressed={!themeDark} onClick={() => {
                                setWidget({
                                    desktopPosition: positionDesktop,
                                    mobilePosition: positionMobile,
                                    logo: logoUrl,
                                    theme: 'light',
                                    mobile: mobileVal,
                                    desktop: desktopVal
                                })
                                setThemeName("light");
                                setThemeDark(false);
                            }}>Light</Button>
                        </ButtonGroup> */}
                        </Card>
                        {/* <Card sectioned title={<DisplayText size="small"><b>Discount for Joining Server</b></DisplayText>}>
                            <Button primary onClick={() => {
                                createDiscount({
                                    variables: {
                                        basicCodeDiscount: {
                                            appliesOncePerCustomer: true,
                                            code: "DISCORD10",
                                            customerSelection: {
                                                all: true
                                            },
                                            customerGets: {
                                                items: {
                                                    all: true
                                                },
                                                value: {
                                                    percentage: 0.1
                                                }
                                            },
                                            title: "Discord Discount",
                                            usageLimit: 1,
                                            startsAt: "2019-07-03T20:47:55Z"
                                        }
                                    }
                                })
                            }}>
                                Create Discount
                        </Button>
                        </Card> */}
                        <Card title={<DisplayText size="small"><b>Widget Notifications</b></DisplayText>} sectioned>
                            <TextField label="Notification Text" value={notificationValue} onChange={(val) => {
                                setNotificationValue(val);
                                setWidget({
                                    desktopPosition: positionDesktop,
                                    mobilePosition: positionMobile,
                                    notificationText: val,
                                    notificationTimeout: timeoutValue,
                                    notificationAvatar: avatarValue,
                                    mobile: mobileVal,
                                    desktop: desktopVal,
                                    color: hslToHex(color.hue, color.brightness, color.saturation)
                                });
                            }} />
                            <br />
                            <p>You can create hyperlinks using markdown like so: [text](link)</p>
                            <br />
                            <TextField label="Notification Timeout (miliseconds)" type="number" value={timeoutValue} onChange={(val) => {
                                setTimeoutValue(val);
                                setWidget({
                                    desktopPosition: positionDesktop,
                                    mobilePosition: positionMobile,
                                    notificationText: notificationValue,
                                    notificationTimeout: val,
                                    notificationAvatar: avatarValue,
                                    mobile: mobileVal,
                                    desktop: desktopVal,
                                    color: hslToHex(color.hue, color.brightness, color.saturation)
                                });
                            }} />
                            <br />
                            <TextField label="Notification Avatar URL" value={avatarValue} onChange={(val) => {
                                setAvatarValue(val);
                                setWidget({
                                    desktopPosition: positionDesktop,
                                    mobilePosition: positionMobile,
                                    notificationText: notificationValue,
                                    notificationTimeout: timeoutValue,
                                    notificationAvatar: val,
                                    mobile: mobileVal,
                                    desktop: desktopVal,
                                    color: hslToHex(color.hue, color.brightness, color.saturation)
                                });
                            }} />
                            <br />
                            <Button onClick={() => { setAvatarValue('https://cdn.discordapp.com/embed/avatars/0.png') }}>Set Default Discord Logo Avatar</Button>
                        </Card>

                        <Card sectioned title={<DisplayText size="small"><b>Help and Contact</b></DisplayText>}>
                            <p>For any kinds of issues or suggestions, you can email us at <b>blazesoftworks7@gmail.com</b></p>
                            <br />
                            {/* <p>If your widget doesn't load, please check if you've entered the correct IDs.</p>
                            <br />
                            <p>If the issue persists please send an email with a screenshot of each of the app's pages with your settings and your store's name and we'll gladly help you solve the problem.</p>
                            <br /> */}
                            <p>We are not affiliated with either <i>Widgetbot</i> or <i>Discord</i>. You can learn more about <i>Widgetbot</i> and support them for extra features <b><a href="https://widgetbot.io/" target="_blank">here</a></b>.</p>
                        </Card>

                    </Layout.Section>

                    <Layout.Section>
                        <br />
                        <Sticky offset>
                            <div style={{ backgroundColor: '#99aab5', borderRadius: '10px' }}>
                                <Stack distribution="center" alignment="center" vertical>
                                    <DisplayText size="small">Press the buttons bellow after every change to see the preview</DisplayText>
                                    {/* <p>Press the button bellow after every change to see the preview</p> */}
                                </Stack>
                                <br />
                                <Stack distribution="center">
                                    <ButtonGroup segmented>
                                        <Button primary size="slim" pressed={desktopPreview} onClick={() => { setDesktopPreview(true); returnIframe(true); setFirstRender(false); }}>Generate Desktop</Button>
                                        <Button primary size="slim" pressed={!desktopPreview} onClick={() => { setDesktopPreview(false); returnIframe(false); setFirstRender(false); }}>Generate Mobile</Button>
                                    </ButtonGroup>
                                    {returnFirstIframe(desktopPreview)}
                                </Stack>
                                <br />
                                <Stack distribution={(!desktopPreview) ? "center" : "fill"}>
                                    <div id="previewdiv">

                                    </div>
                                </Stack>
                                {/* <Stack distribution="trailing" spacing="extraLoose"> */}
                                {/* <svg height="100" width="100"> */}
                                {/* <circle cx="50" cy="50" r="30" fill={hslToHex(color.hue, color.saturation, color.brightness)}> */}
                                {/* </circle> */}
                                {/* </svg> */}
                                {/* #7289DA */}
                                {/* <div style={{ backgroundColor: hslToHex(color.hue, color.saturation, color.brightness) }} className="dot">
                                        <Stack distribution="center" alignment="center">
                                            <img src="dislogo.png" width="40px" height="40px"></img>
                                        </Stack>
                                    </div> */}
                                {/* {
                                        (valID != '') ?
                                            < img className="not-select" width="80" src={
                                                (logoPressedObject.logo1) ?
                                                    "https://discord.com/assets/1c8a54f25d101bdc607cec7228247a9a.svg" :
                                                    (logoPressedObject.logo2) ? "https://discord.com/assets/41484d92c876f76b20c7f746221e8151.svg" : "https://discord.com/assets/f8389ca1a741a115313bede9ac02e2c0.svg"
                                            } /> : <div></div>
                                    } */}
                                {/* </Stack> */}
                            </div>
                        </Sticky>
                    </Layout.Section>

                    <div style={{
                        position: 'fixed',
                        zIndex: '99',
                        bottom: '0',
                        right: '0',
                        padding: '2rem',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        background: '#F4F6F8',
                        borderTop: '1px solid #DFE3E8',
                    }}>
                        <div></div>
                        <Button disabled={valID == ''} size="medium" primary onClick={() => {
                            makeApiCall(widgetObj, shopURL);
                            setActive(true);
                        }}>Save Settings</Button>
                    </div>

                    {/* <Layout.Section>
                    <Card sectioned>
                        <Button
                            primary
                            size="slim"
                            type="submit"
                            onClick={() => {
                                createScripts({
                                    variables: {
                                        input: {
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
                    <Card>
                        <ResourceList
                            showHeader
                            resourceName={{ singular: 'Script', plural: 'Scripts' }}
                            items={data.scriptTags.edges}
                            renderItem={item => {
                                return (
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
                                                <Button type="submit" onClick={() => {
                                                    deleteScripts({
                                                        variables: {
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
                </Layout.Section> */}
                </Layout >
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    backgroundColor: '#f4f6f8',
                    width: '100%',
                    marginTop: '20px',
                    marginBottom: '77px',
                    padding: '20px 24px 20px 0px'
                }} />
            </Page >
        </Frame >
    )
}

export default ScriptPage;




