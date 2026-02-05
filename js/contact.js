(function () {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const submitButton = document.getElementById('contact-submit');

  if (!form || !status || !submitButton) {
    return;
  }

  function setStatus(state, message) {
    status.textContent = message;
    status.classList.remove('text-red-400', 'text-emerald-400', 'text-text-muted');

    if (state === 'success') {
      status.classList.add('text-emerald-400');
      return;
    }

    if (state === 'error') {
      status.classList.add('text-red-400');
      return;
    }

    status.classList.add('text-text-muted');
  }

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    submitButton.disabled = true;
    submitButton.classList.add('cursor-not-allowed', 'opacity-70');
    setStatus('idle', 'Sending...');

    try {
      const response = await fetch(form.action, {
        method: form.method || 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success', 'Thanks, your message has been sent.');
        form.reset();
      } else {
        const payload = await response.json().catch(() => null);
        const message = payload && payload.errors
          ? payload.errors.map((error) => error.message).join(', ')
          : 'Could not send the message. Please try again.';
        setStatus('error', message);
      }
    } catch (error) {
      setStatus('error', 'Network error. Please try again.');
    } finally {
      submitButton.disabled = false;
      submitButton.classList.remove('cursor-not-allowed', 'opacity-70');
    }
  });
})();
