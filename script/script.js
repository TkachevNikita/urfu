const switcher = document.querySelector('.switcher');
const switcherButton = document.querySelector('.switch__button');
const switchContract = document.querySelector('.switch__contract');
const switchBudget = document.querySelector('.switch__budget');
const budget = document.querySelector('.budget');
const contract = document.querySelector('.contract');
let isActive = false;


switcherButton.addEventListener('click', () => {
    if (!isActive) {
        switcher.classList.add('isActive');
        switchBudget.classList.remove('selected');
        switchContract.classList.add('selected');
        budget.classList.add('hidden');
        contract.classList.remove('hidden');
        isActive = true;
    } else {
        switchBudget.classList.add('selected');
        switchContract.classList.remove('selected');
        switcher.classList.remove('isActive');
        budget.classList.remove('hidden');
        contract.classList.add('hidden');
        isActive = false;
    }
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".header__content").style.top = "0";
  } else {
    document.querySelector(".header__content").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}