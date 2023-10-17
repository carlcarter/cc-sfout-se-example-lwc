import { LightningElement, track } from 'lwc';

export default class ccLWCOutCarFinanceCalc extends LightningElement {

    @track showQuotes = false;

    termOptions = [
        { label: '12 months', value: '12' },
        { label: '24 months', value: '24' },
        { label: '36 months', value: '36' },
        { label: '48 months', value: '48' }
    ];

    // Sample pre-generated finance options
    financeOptions = [
        {
            id: 1,
            provider: 'Finance Co. A',
            type: 'Hire Purchase',
            monthlyPayment: 20000,
            apr: 5,
            termLength: '24 months',
            totalPayable: 550000
        },
        {
            id: 1,
            provider: 'Finance Co. B',
            type: 'Hire Purchase',
            monthlyPayment: 25000,
            apr: 6,
            termLength: '24 months',
            totalPayable: 600000
        }
        // ... Add other options similarly
    ];

    handleUpdate() {
        this.showQuotes = true;
    }




}