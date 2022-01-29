<progress id="p1" min="0" max="100" value="0"></progress>
<button onclick="proc1();">ウイルススキャン</button>
<script>
function proc1()
{
	if (document.getElementById('p1').value < 100 ) {
		document.getElementById('p1').value++;
		setTimeout(proc1, 100);
	}
}
</script>
