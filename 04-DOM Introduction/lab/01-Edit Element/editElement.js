function editElement(ref, str, replacer) {
    ref.textContent = ref.textContent.replace(new RegExp(str, 'g'), replacer);
}