import React, {Fragment} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  GitExpertApp  from "./components/GitExpertApp";
import  AddCategory  from "./components/AddCategory";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Fragment>
        <GitExpertApp />
    </Fragment>
);



