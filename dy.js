document.addEventListener('DOMContentLoaded', function() {
	const lamp = document.querySelector('.lamp');
	if (lamp) {
		lamp.addEventListener('click', function() {
			lamp.style.boxShadow = '0 0 64px 32px #fff, 0 0 24px 8px #fff';
			lamp.style.filter = 'brightness(1.5)';
			setTimeout(() => {
				lamp.style.boxShadow = '';
				lamp.style.filter = '';
			}, 700);
		});
	}
});
document.addEventListener('DOMContentLoaded', function() {
	// Animation for skills
	const skills = document.querySelectorAll('.cv-skills li');
	skills.forEach((skill, i) => {
		skill.style.opacity = '0';
		skill.style.transform = 'translateY(40px) scale(0.8)';
		setTimeout(() => {
			skill.style.transition = 'opacity 0.7s cubic-bezier(.77,0,.18,1), transform 0.7s cubic-bezier(.77,0,.18,1)';
			skill.style.opacity = '1';
			skill.style.transform = 'translateY(0) scale(1)';
		}, 300 + i * 180);
		skill.addEventListener('mouseenter', () => {
			skill.style.transform = 'scale(1.18) rotate(-6deg)';
			skill.style.boxShadow = '0 12px 32px #ffb300cc';
		});
		skill.addEventListener('mouseleave', () => {
			skill.style.transform = 'translateY(0) scale(1)';
			skill.style.boxShadow = '';
		});
	});

	// Animate section titles
	const sections = document.querySelectorAll('.cv-section h2');
	sections.forEach((section, i) => {
		section.style.opacity = '0';
		section.style.transform = 'translateX(-60px) scale(0.9)';
		setTimeout(() => {
			section.style.transition = 'opacity 0.8s cubic-bezier(.77,0,.18,1), transform 0.8s cubic-bezier(.77,0,.18,1)';
			section.style.opacity = '1';
			section.style.transform = 'translateX(0) scale(1)';
		}, 500 + i * 250);
	});

	// Header photo hover effect
	const photo = document.querySelector('.cv-photo');
	if (photo) {
		photo.addEventListener('mouseenter', () => {
			photo.style.filter = 'drop-shadow(0 0 32px #ffb300) brightness(1.15)';
		});
		photo.addEventListener('mouseleave', () => {
			photo.style.filter = '';
		});
	}
});
