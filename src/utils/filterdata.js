export function filterData(res,SearchText){
    const filterdata=res?.filter(r => r?.info?.name?.toLowerCase()?.includes(SearchText?.toLowerCase()));
       return filterdata;
}