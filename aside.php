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

                <td>Mo.</td>
                <td>08:00 - 13:00 Uhr und 14:00 - 20:00 Uhr</td>

            </tr>
            <tr>

                <td>Di., Mi. & Do.</td>
                <td>07:30 - 13:00 Uhr und 14:00 - 20:00 Uhr</td>

            </tr>
            <tr>

                <td>Fr.</td>
                <td>07:30 - 12:00 Uhr</td>

            </tr>
            <tr>

                <td>Sa.:</td>
                <td>geschlossen</td>

            </tr>

			<tr>

				<td>Mittagspause:</td>
                <td>13:00 bis 14:00 Uhr</td>

			</tr>

			<tr>

				<td colspan="2" class="heading" >Urlaubszeiten</td>

			</tr>

            <?php

            $db = new mysqli("localhost", "zahndocs", "eRgh4$40", "zahndocs_daten");
            if ($db->connect_errno) {
                echo "<span>Aktuell können die Urlaubszeiten leider nicht abgefragt werden. Bitte versuchen Sie es später erneut.</span>";
            } else {
                $result = $db->query("SELECT * FROM urlaub WHERE name = 'Kunath' ORDER BY id LIMIT 2");
                $data = $result->fetch_all(MYSQLI_ASSOC);
                $first = true;
                foreach ($data as $val) {
                    echo "<tr><td>";
                    if ($first) {
                        echo "ZÄ Kunath:";
                        $first = false;
                    }
                    echo "</td><td>$val[datum]</td></tr>";
                }
            }

            ?>

            <?php

            $db = new mysqli("localhost", "zahndocs", "eRgh4$40", "zahndocs_daten");
            if ($db->connect_errno) {
                echo "<span>Aktuell können die Urlaubszeiten leider nicht abgefragt werden. Bitte versuchen Sie es später erneut.</span>";
            } else {
                $result = $db->query("SELECT * FROM urlaub WHERE name = 'Herrmann' ORDER BY id LIMIT 2");
                $data = $result->fetch_all(MYSQLI_ASSOC);
                $first = true;
                foreach ($data as $val) {
                    echo "<tr><td>";
                    if ($first) {
                        echo "ZÄ Herrmann:";
                        $first = false;
                    }
                    echo "</td><td>$val[datum]</td></tr>";
                }
            }

            ?>

		</table>
	</div>

</aside>
