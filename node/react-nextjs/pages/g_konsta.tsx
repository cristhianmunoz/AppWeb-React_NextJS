import {App, BlockTitle, List, ListItem, Navbar, Page} from "konsta/react";

export default function (){
    return(
        <>
        <App theme="ios">
            <Page>
                <Navbar title="list"/>
                <BlockTitle>Links, Headers, Footer</BlockTitle>
                <List strongIos outlineIos>
                    <ListItem
                        link
                        header="Name"
                        title="John Doe"
                        after="Edit"
                    />
                </List>
            </Page>
        </App>
        </>
    )
}