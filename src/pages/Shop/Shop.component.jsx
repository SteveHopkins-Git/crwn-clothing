import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview.component';
import CollectionPage from '../Collection/Collection.component';

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
