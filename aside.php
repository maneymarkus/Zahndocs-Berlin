<aside class="aside">

	<span class="icon-container">
		<i class="material-icons aside-icon">arrow_back</i>
	</span>

	<div class="aside-content">

		<table>

			<tr>

				<td colspan="2" class="heading" >Sprechzeiten</td>

			</tr>

			<tr>

				<td>Mo. - Do.:</td>
				<td>07:30 - 13:00 Uhr<br />
				14:00 - 20:00 Uhr</td>

			</tr>

			<tr>

				<td>Fr.:</td>
				<td>07:30 - 12:00 Uhr</td>

			</tr>

			<tr>

				<td>Sa.:</td>
				<td>geschlossen</td>

			</tr>

			<tr>

				<td colspan="2">Mittagspause: 13:00 bis 14:00 Uhr</td>

			</tr>

			<tr>

				<td colspan="2" class="heading" >Urlaubszeiten</td>

			</tr>

			<tr>

				<td>ZÄ Kunath:</td>
                <?php

                $db = new mysqli("localhost", "root", "", "zahndocs_daten");
                if ($db->connect_errno) {
                    echo "<p>Aktuell können die Urlaubszeiten leider nicht abgefragt werden. Bitte versuchen Sie es später erneut.</p>";
                } else {
                    $result = $db->query("SELECT * FROM urlaub WHERE name = 'Kunath' LIMIT 2");
                    $data = $result->fetch_all(MYSQLI_ASSOC);
                    foreach ($data as $val) {
                        echo "<td>$val[datum]</td>";
                    }
                }

                ?>

			</tr>

			<tr>

				<td>ZÄ Herrmann:</td>
                <?php

                $db = new mysqli("localhost", "root", "", "zahndocs_daten");
                if ($db->connect_errno) {
                    echo "<p>Aktuell können die Urlaubszeiten leider nicht abgefragt werden. Bitte versuchen Sie es später erneut.</p>";
                } else {
                    $result = $db->query("SELECT * FROM urlaub WHERE name = 'Herrmann' LIMIT 2");
                    $data = $result->fetch_all(MYSQLI_ASSOC);
                    foreach ($data as $val) {
                        echo "<td>$val[datum]</td>";
                    }
                }

                ?>

			</tr>

		</table>
	</div>

</aside>
