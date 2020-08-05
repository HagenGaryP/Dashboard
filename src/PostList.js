import * as React from "react";
import { useMediaQuery } from '@material-ui/core';
import { List, SimpleList, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';
import PostFilter from './PostFilter';

export const PostList = (props) => {
    const isSmall = useMediaQuery(
      theme => theme.breakpoints.down('sm')
    );

    return (
      <List filters={<PostFilter />} {...props}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            ) : (
                <Datagrid>
                    <TextField source="id" />
                    <ReferenceField label="User" source="userId" reference="users">
                        <TextField source="name" />
                    </ReferenceField>
                    <TextField source="title" />
                    <TextField source="body" />
                    <EditButton />
                </Datagrid>
            )}
        </List>
    );
}


/*
  after "supporting Mobile Devices" but before using the
  useMediaQuery hook.
*/

// import * as React from "react";
// // import { List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';
// import { List, SimpleList } from 'react-admin';
// import PostFilter from './PostFilter';

// // using List and SimpleList

// export const PostList = (props) => (
//   <List {...props}>
//     <SimpleList
//       primaryText={record => record.title}
//       secondaryText={record => `${record.views} views`}
//       tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
//     />
//   </List>
// );




/*
  before using the EditGuesser in App.js
  after this, I created a new file -> PostEdit.js instead of
  adding to this one.
*/

// export const PostList = props => (
//   <List filters={<PostFilter />} {...props}>
//     {/* <Datagrid rowClick="edit"> */}
//     <Datagrid>
//       <TextField source="id" />
//       <ReferenceField source="userId" reference="users">
//         {/* <TextField source="id" /> */}
//         <TextField source="name" />
//       </ReferenceField>
//       {/* <TextField source="id" /> */}
//       <TextField source="title" />
//       {/* <TextField source="body" /> */}

//       <EditButton />

//     </Datagrid>
//   </List>
// );
