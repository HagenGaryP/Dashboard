import * as React from "react";

// import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import { Admin, Resource } from 'react-admin';
import { PostCreate } from './PostCreate';
import { PostEdit } from './PostEdit';
import { PostList } from './PostList';
import { UserList } from './UserList';
import Dashboard from './Dashboard';

import authProvider from './authProvider';
// import dataProvider from './dataProvider';
/* if you wanted to use a real API to fetch your data, with the function in the dataProvider.js file.
*/

import jsonServerProvider from 'ra-data-json-server';
// 'ra-data-json-server' is a data provider that speaks the same REST dialect as JSONPlaceholder
import PostIcon from '@material-ui/icons/Book'
import UserIcon from '@material-ui/icons/Group'


const dataProvider = jsonServerProvider(
  'https://jsonplaceholder.typicode.com'
);

const App = () => (
  <Admin
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >

    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
);

export default App;
