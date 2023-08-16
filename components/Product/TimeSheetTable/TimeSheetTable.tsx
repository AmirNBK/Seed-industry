import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import tick from '../../../assets/Icons/tick.svg';
import Image from 'next/image';

const TimeSheetTable = () => {
    const columns = [
        { field: 'ordibehesht', header: 'اردیبهشت' },
        { field: 'khordad', header: 'خرداد' },
        { field: 'tir', header: 'تیر' },
        { field: 'mordad', header: 'مرداد' },
        { field: 'shahrivar', header: 'شهریور' },
        { field: 'mehr', header: 'مهر' },
        { field: 'aban', header: 'آبان' },
        { field: 'azar', header: 'آذر' },
        { field: 'dey', header: 'دی' },
        { field: 'bahman', header: 'بهمن' },
        { field: 'esfand', header: 'اسفند' },
        { field: 'farvardin', header: 'فروردین' },
    ];

    const [products, setProducts] = useState([
        {
            ordibehesht: <Image src={tick} alt='tick' />,
            khordad: '',
            tir: '',
            mordad: '',
            shahrivar: <Image src={tick} alt='tick' />,
            mehr: <Image src={tick} alt='tick' />,
            aban: '',
            azar: <Image src={tick} alt='tick' />,
            dey: '',
            bahman: <Image src={tick} alt='tick' />,
        },
    ]);

    return (
        <div className='TimeSheetTable card'>
            <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                {columns.map((column) => (
                    <Column
                        key={column.field}
                        field={column.field}
                        header={column.header}
                    />
                ))}
            </DataTable>
        </div>
    );
};

export default TimeSheetTable;
