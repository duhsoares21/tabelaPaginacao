jQuery.tabelaPaginacao = function(tableID,rowPrefix,_MaxItems,PagLocation)
{
   	var id;
	
	var maxItems = _MaxItems;

	var numRows = jQuery('#'+tableID+' tr').size()-1;
	
	var paginas = Math.ceil(numRows/maxItems);
	
	if(rowPrefix == '' || rowPrefix == null)
	{
		rowPrefix = 'row';
		jQuery('#'+tableID+' tr').each(function(i){
			this.id = rowPrefix + "_" + i;
		});
	}
	else	
	{	
		jQuery('#'+tableID+' tr').each(function(i){
		this.id = rowPrefix + "_" + i;
		});
	}
		
	jQuery("#"+tableID+" tr[id^='"+rowPrefix+"_']").each(function() {
	id = parseInt(this.id.replace(rowPrefix+"_", ""));
	
	if(id > maxItems)
	{
		jQuery("#"+rowPrefix+"_"+id).hide();
	}
	// do stuff with airline and flightNumber <input>s
	});
	for(var i = 1; i <= paginas; i++)
	{
		var a = document.createElement('a');
		var linkText = document.createTextNode(i);
		a.id = "link_"+i;
		a.className = "page";
		a.appendChild(linkText);
		a.title = i;
		a.href = "javascript:void(0)";
		document.getElementById(''+PagLocation+'').appendChild(a);
	
		jQuery("#link_"+i).click(function(){
			
		var tt = this.id;

		var tt_int = tt.replace("link_","");
		
		jQuery("#"+tableID+" tr[id^='"+rowPrefix+"_']").each(function() {
		var new_id = parseInt(this.id.replace(rowPrefix+"_", ""));
		if(tt_int != 1)
		{
			var idPage = tt_int * maxItems;
			
			var thisPage = idPage - maxItems;	
			
			if(new_id <= idPage && new_id >= thisPage+1)
			{
				jQuery("#"+rowPrefix+"_"+new_id).show();
			}
			else
			{
				jQuery("#"+rowPrefix+"_"+new_id).hide();
				jQuery("#"+rowPrefix+"_0").show();
			}
		}
		else
		{
			if(new_id > maxItems)
			{
				jQuery("#"+rowPrefix+"_"+new_id).hide();
			}
			else
			{
				jQuery("#"+rowPrefix+"_"+new_id).show();
			}
		}
		});
		});
	}
}