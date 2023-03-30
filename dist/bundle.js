(() => {
    'use strict';
    new ((function () {
        function t(t) {
            if (!(t instanceof HTMLElement))
                throw new Error('Передан не HTMLElement');
            (this.element = t),
                (this.difficulty = ''),
                (this.min = 0),
                (this.sec = 0),
                (this.levels = { 1: 6, 2: 12, 3: 18 }),
                this.start();
        }
        return (
            (t.prototype.start = function () {
                var t = this;
                this.element.innerHTML = '';
                var e = document.createElement('div');
                e.classList.add('game__start-window');
                var a = document.createElement('h1');
                a.classList.add('game__header'),
                    (a.textContent = 'Выбери сложность');
                var i = document.createElement('div');
                i.classList.add('game__menu-difficulty');
                for (var n = 1; n <= 3; n++) {
                    var d = document.createElement('button');
                    d.classList.add('difficulty'),
                        (d.textContent = ''.concat(n)),
                        d.setAttribute('data-difficulty', ''.concat(n)),
                        i.appendChild(d);
                }
                var c = i.querySelectorAll('.difficulty'),
                    s = document.createElement('button');
                s.classList.add('game__button', 'game__button_start'),
                    (s.textContent = 'Старт');
                var l = document.createElement('p');
                (l.textContent = 'Выберите сложность'),
                    l.classList.add('warning', 'warning_hidden'),
                    e.appendChild(a),
                    e.appendChild(i),
                    e.appendChild(s),
                    e.appendChild(l),
                    this.element.appendChild(e),
                    i.addEventListener('click', function (e) {
                        var a = e.target;
                        (t.difficulty = a.dataset.difficulty),
                            console.log(t.difficulty),
                            c.forEach(function (e) {
                                e.dataset.difficulty === t.difficulty
                                    ? (e.classList.add('difficulty_active'),
                                      l.classList.add('warning_hidden'))
                                    : e.classList.remove('difficulty_active');
                            });
                    }),
                    s.addEventListener('click', function () {
                        '' === t.difficulty || void 0 === t.difficulty
                            ? l.classList.remove('warning_hidden')
                            : t.gameWindow();
                    });
            }),
            (t.prototype.gameWindow = function () {
                var t = this;
                console.log('загрузка');
                var e = [
                        '6C',
                        '6D',
                        '6H',
                        '6S',
                        '7C',
                        '7D',
                        '7H',
                        '7S',
                        '8C',
                        '8D',
                        '8H',
                        '8S',
                        '9C',
                        '9D',
                        '9H',
                        '9S',
                        'TC',
                        'TD',
                        'TH',
                        'TS',
                        'JC',
                        'JD',
                        'JH',
                        'JS',
                        'QC',
                        'QD',
                        'QH',
                        'QS',
                        'KC',
                        'KD',
                        'KH',
                        'KS',
                        'AC',
                        'AD',
                        'AH',
                        'AS',
                    ],
                    a = [];
                (this.element.innerHTML = ''),
                    this.element.classList.add('position-top');
                var i = document.createElement('div');
                i.classList.add('game__menu');
                var n = document.createElement('div');
                n.classList.add('game__time');
                var d = document.createElement('div');
                d.classList.add('game__time-titles');
                var c = document.createElement('div');
                c.classList.add('game__time-title', 'game__time-title_min'),
                    (c.textContent = 'min');
                var s = document.createElement('div');
                s.classList.add('game__time-title', 'game__time-title_sec'),
                    (s.textContent = 'sec');
                var l = document.createElement('div');
                l.classList.add('game__time-digits');
                var m = document.createElement('div');
                m.classList.add('game__time-digit', 'game__time-digit_min'),
                    (m.textContent = '00');
                var o = document.createElement('div');
                (o.textContent = '.'), o.classList.add('game__time-digit');
                var r = document.createElement('div');
                r.classList.add('game__time-digit', 'game__time-digit_sec'),
                    (r.textContent = '00'),
                    d.appendChild(c),
                    d.appendChild(s),
                    l.appendChild(m),
                    l.appendChild(o),
                    l.appendChild(r),
                    n.appendChild(d),
                    n.appendChild(l);
                var u = document.createElement('button');
                u.classList.add('game__button', 'game__button_play-again'),
                    (u.textContent = 'Начать заново'),
                    i.appendChild(n),
                    i.appendChild(u);
                var _ = document.createElement('div');
                _.classList.add('game__card-field');
                for (
                    var p = 1;
                    p <= this.levels[Number(this.difficulty)] / 2;
                    p++
                ) {
                    var g = e[Math.floor(Math.random() * e.length)];
                    a.push(g);
                }
                for (
                    a = (a = a.concat(a)).sort(function () {
                        return Math.random() - 0.5;
                    }),
                        console.log(a),
                        p = 0;
                    p <= this.levels[Number(this.difficulty)] - 1;
                    p++
                ) {
                    (g = document.createElement('div')).classList.add(
                        'game__card'
                    );
                    var h = document.createElement('img');
                    h.setAttribute('src', './static/img/shirt.svg'),
                        h.classList.add('card'),
                        g.appendChild(h),
                        h.setAttribute('data-card', ''.concat(a[p])),
                        _.appendChild(g);
                }
                this.element.appendChild(i), this.element.appendChild(_);
                var v = document.querySelectorAll('.card');
                u.addEventListener('click', function () {
                    t.element.classList.remove('position-top'), t.start();
                }),
                    setTimeout(function () {
                        v.forEach(function (t) {
                            t.setAttribute(
                                'src',
                                './static/img/'.concat(t.dataset.card, '.svg')
                            );
                        }),
                            t.gameStart();
                    }, 1e3);
            }),
            (t.prototype.gameStart = function () {
                console.log('игра');
                var t = document.querySelectorAll('.card');
                setTimeout(function () {
                    t.forEach(function (t) {
                        t.setAttribute('src', './static/img/shirt.svg');
                    });
                }, 5e3);
            }),
            (t.prototype.win = function () {
                var t = this,
                    e = document.createElement('div');
                e.classList.add('game__final-window');
                var a = document.createElement('img');
                a.classList.add('game__final-img'),
                    a.setAttribute('src', './static/img/win.png');
                var i = document.createElement('h1');
                i.classList.add('game__header'),
                    (i.textContent = 'Вы выиграли!');
                var n = document.createElement('h3');
                n.classList.add('game__final-time-title'),
                    (n.textContent = 'Затраченное время:');
                var d = document.querySelector('.game__time-digit_min'),
                    c = document.querySelector('.game__time-digit_sec'),
                    s = document.createElement('div');
                s.classList.add('game__final-time-digit'),
                    (s.textContent = ''
                        .concat(d.textContent, '.')
                        .concat(c.textContent, ' '));
                var l = document.createElement('button');
                l.classList.add('game__button', 'game__button_play-again'),
                    (l.textContent = 'Играть снова'),
                    e.appendChild(a),
                    e.appendChild(i),
                    e.appendChild(n),
                    e.appendChild(s),
                    e.appendChild(l),
                    this.element.appendChild(e),
                    l.addEventListener('click', function () {
                        t.element.classList.remove('position-top'), t.start();
                    }),
                    (this.min = 0),
                    (this.sec = 0);
            }),
            (t.prototype.lose = function () {
                var t = this,
                    e = document.createElement('div');
                e.classList.add('game__final-window');
                var a = document.createElement('img');
                a.classList.add('game__final-img'),
                    a.setAttribute('src', './static/img/lose.png');
                var i = document.createElement('h1');
                i.classList.add('game__header'),
                    (i.textContent = 'Вы проиграли!');
                var n = document.createElement('h3');
                n.classList.add('game__final-time-title'),
                    (n.textContent = 'Затраченное время:');
                var d = document.createElement('div');
                d.classList.add('game__final-time-digit'),
                    (d.textContent = ''
                        .concat(
                            document.querySelector('.game__time-digit_min')
                                .textContent,
                            '.'
                        )
                        .concat(
                            document.querySelector('.game__time-digit_sec')
                                .textContent,
                            ' '
                        ));
                var c = document.createElement('button');
                c.classList.add('game__button', 'game__button_play-again'),
                    (c.textContent = 'Играть снова'),
                    e.appendChild(a),
                    e.appendChild(i),
                    e.appendChild(n),
                    e.appendChild(d),
                    e.appendChild(c),
                    this.element.appendChild(e),
                    c.addEventListener('click', function () {
                        t.element.classList.remove('position-top'), t.start();
                    }),
                    (this.min = 0),
                    (this.sec = 0);
            }),
            t
        );
    })())(document.querySelector('.game'));
})();
//# sourceMappingURL=bundle.js.map
