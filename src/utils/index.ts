export function sendEmail() {
  const email = "alejandro.hincapie.lo@gmail.com";
  const subject = "Opportunity Email";
  const msgBody = "Your message here!";
  window.open(`mailto:${email}?subject=${subject}&body=${msgBody}`);
}
