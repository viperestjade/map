<script>
    document.querySelectorAll('.overlay').forEach(marker => {
        marker.addEventListener('click', function () {
            // Toggle visibility
            this.style.opacity = this.style.opacity === '1' ? '0' : '1';
        });
    });
</script>
