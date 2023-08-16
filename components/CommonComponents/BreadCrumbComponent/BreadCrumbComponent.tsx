import React from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';

const BreadCrumbComponent = (props: {
    items: MenuItem[]
}) => {
    return (
        <div className='BreadCrumb'>
            <BreadCrumb model={props.items} style={{ backgroundClip: 'transparent' }} />
        </div>
    );
};

export default BreadCrumbComponent;