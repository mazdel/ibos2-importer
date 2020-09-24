const ibos2autoinput = (targetRows,data)=>{
    $(targetRows).each((key,value)=>{
    const cell             = $(value).children();
    const gameNameCell     = $(cell[3]);
    const coinMeterCell         = $(cell[4]);
    const ticketCounterCell     = $(cell[5]);
    const coinMeterInput        = $(coinMeterCell.find("input"));
    const ticketCounterInput    = $(ticketCounterCell.find("input"));
    
    /*deklarasi data*/
    data.forEach((item,key)=>{
        const dataGameName = item[0];
        const dataCoinMeter = item[1];
        const dataTicketCounter = item[2];

        if(gameNameCell.text()==dataGameName){
            coinMeterInput.val(dataCoinMeter);
            if(ticketCounterInput.val()>=0){
                ticketCounterInput.val(dataTicketCounter);
            }
            console.log(
                `${dataGameName} is done with`,
                `C => ${coinMeterInput.val()}`,
                `T => ${ticketCounterInput.val()}
                `);
        }
    })
    //console.log(key,ticketCounterInput.val());
})
}
