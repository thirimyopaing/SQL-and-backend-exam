<?php

	$hamburger=4.95;
	$chocoshake=1.95;
	$cola=0.85;
	$sale_taxrate=0.075;
	$pretip_rate=0.16;

$subtotal =  ($hamburger * 2) + $chocoshake + $cola;
$tax = $subtotal * $sale_taxrate;
$pretip = $subtotal * $pretip_rate;
$total = $subtotal + $pretip + $tax;


echo "<h1>Menu</h1>";
echo "Hambuger : $hamburger<br>";
echo "Chocolate milkshake  : $chocoshake<br>";
echo "Cola : $cola<br>";
echo "<br>";

echo "<table border=5 cellpadding= 5>";
echo "<tr><td colspan=4><center><b>Vocher</b></center></td></tr>";
echo "<tr><td>Name</td><td>Price</td><td>Qty</td><td>Total Price</td></tr>";
echo "<tr><td>Hambuger</td><td>$$hamburger</td><td>2</td><td>$$</td></tr>";
echo "<tr><td>Choco-MilkShake</td><td>$$chocoshake</td><td>1</td><td>$$chocoshake</td></tr>";
echo "<tr><td>Cola </td><td>$$cola</td><td>1</td><td>$$cola</td></tr>";
echo "<tr><td colspan=3>Total</td><td>$$subtotal</td></tr>";
echo "<tr><td colspan=3>Sale Tax Rate</td><td>$$sale_taxrate</td></tr>";
echo "<tr><td colspan=3>Pre-tax Tip</td><td>$$pretip_rate</td></tr>";
echo "<tr><td colspan=3>Total (tax included)</td><td>$$total</td></tr>";
echo "</table>";

?>