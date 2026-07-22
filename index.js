const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

  app.get('/api/salam', (req, res) => {
    res.json({
        pesan: 'Halo! Selamat datang di website pertamaku! 🎉',
            waktu: new Date().toLocaleString('id-ID')
              });
              });

              app.listen(PORT, () => {
                console.log(`Server berjalan di http://localhost:${PORT}`);
                });