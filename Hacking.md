XSS (Cross-Site Scripting)
<!-- <script>alert('Du er blevet hacket!');</script> -->

SQL Injection
<!-- '; DROP DATABASE navn_på_database; -- -->

👉 Hvad gør det?

● '; afslutter den oprindelige SQL-forespørgsel.

● DROP DATABASE navn_på_database; sletter hele databasen!

● -- kommenterer resten af den oprindelige forespørgsel ud, så der ikke opstår fejl.