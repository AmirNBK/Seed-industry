import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import tick from '../../../assets/Icons/tick.svg'
import Image from 'next/image';

const TimeSheetTable = () => {

    const [products, setProducts] = useState([{
        ordibehesht: <Image src={tick} alt='tick'/>,
        khordad: '',
        tir: '',
        mordad: '',
        shahrivar: <Image src={tick} alt='tick'/>,
        mehr: <Image src={tick} alt='tick'/>,
        aban: '',
        azar: <Image src={tick} alt='tick'/>,
        dey: '',
        bahman: <Image src={tick} alt='tick'/>
    }]);

    return (
        <div className='TimeSheetTable card'>
            <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                <Column field="ordibehesht" header="اردیبهشت"></Column>
                <Column field="khordad" header="خرداد"></Column>
                <Column field="tir" header="تیر"></Column>
                <Column field="mordad" header="مرداد"></Column>
                <Column field="shahrivar" header="شهریور"></Column>
                <Column field="mehr" header="مهر"></Column>
                <Column field="aban" header="آبان"></Column>
                <Column field="azar" header="آذر"></Column>
                <Column field="dey" header="دی"></Column>
                <Column field="bahman" header="بهمن"></Column>
                <Column field="esfand" header="اسفند"></Column>
                <Column field="farvardin" header="فروردین"></Column>

            </DataTable>
        </div>
    );
};

export default TimeSheetTable;