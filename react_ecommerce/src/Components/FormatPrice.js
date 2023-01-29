function FormatPrice({price}) {
    console.log(` PRoduct price = ${price}`);
  return (
    Intl.NumberFormat( "en-BD",{
        style : "currency",
        currency : "BDT",
    }).format(price / 100 )
  )
}

export default FormatPrice