const GAGIM = (function() {
    const _public = {};
    const _private = {};
    const ttl = gsap.timeline();
    const dtl = gsap.timeline();
    const ctl = gsap.timeline();
    const txtTl =  gsap.timeline();
    const md = new MobileDetect(navigator.userAgent);
    const btnIOS = document.getElementsByClassName('btn-ios');
    const btnAND = document.getElementsByClassName('btn-android');
    _public.init = function () {
        _private.eventHandler();
        _private.motion01();
        console.log(md.mobile());
        console.log(md.os()); //iOS, AndroidOS
        console.log(md.phone());
        console.log(btnIOS);
        if (md.os() === 'iOS') {
            document.getElementsByClassName('btn-ios')[0].style.display ='block';
        } else if (md.os() == 'AndroidOS') {
            document.getElementsByClassName('btn-android')[0].style.display ='block';
        } else {
            document.getElementsByClassName('btn-ios')[0].style.display ='block';
            document.getElementsByClassName('btn-android')[0].style.display ='block';
        }
    }
    _private.eventHandler = function () {
    }
    _public.getFaq = function () {
        $.ajax({
            url: 'https://goingdev.yesev.co.kr/api/common/notice/?page=1&type=F', // 클라이언트가 HTTP 요청을 보낼 서버의 URL 주소
            method: 'GET',   // HTTP 요청 메소드(GET, POST 등)
            dataType: 'json' // 서버에서 보내줄 데이터의 타입
        })
            .done(function(data) {
                if (data.code === 0) {
                    let el = '<ul>'
                    let i = 0
                    for (i; i < 5; i++) {
                        el += '<li><a href="javascript:;" data-id="' + data.result[i].id + '">' + data.result[i].title + '</a></li>'
                    }
                    el += '</ul><ul>'
                    for (i; i < 10; i++) {
                        el += '<li><a href="javascript:;" data-id="' + data.result[i].id + '">' + data.result[i].title + '</a></li>'
                    }
                    el += '</ul>'
                    $('#faqList').html(el)
                    $('#faqList li a').on('click', function () {
                        _public.getFaqDetail($(this).data('id'))
                    })
                }
            })
            .fail(function(xhr, status, errorThrown) {
                $('#faq').hide()
            })
    }
    _public.getFaqDetail = function (id) {
            $.ajax({
                url: 'https://goingdev.yesev.co.kr/api/common/notice/' + id + '/?type=F', // 클라이언트가 HTTP 요청을 보낼 서버의 URL 주소
                method: 'GET',   // HTTP 요청 메소드(GET, POST 등)
                dataType: 'json' // 서버에서 보내줄 데이터의 타입
            })
                .done(function(data) {
                    $('#faqTit').html(data.result.title)
                    $('#faqCon').html(data.result.content)
                    $('#pop').css('display', 'flex')
                })
                .fail(function(xhr, status, errorThrown) {
                })
    }
    _public.toScroll = function (id) {
        const sc = $('#' + id).offset().top
        $('html, body').animate({scrollTop: sc}, 300);
    }
    _private.motion01 = function () {
        // text
        txtTl.to('#mainTit', {duration: 1.5, text: '당신의 모든 움직임을<br>가치있게', ease: 'ease'})
        txtTl.to('#mainTit', {duration: 0, text: '상대방과 나의<br>동선이 겹치면', ease: 'ease', delay: 4.5})
        txtTl.to('#mainTit', {duration: 1, text: '매칭이 되어<br>알림을 전송해요', ease: 'ease', delay: 5})

        // top
        ttl.to('#mainTit', {duration: 0.5, top: 15, ease: 'ease', delay: 2});
        ttl.to('#bag', {duration: 0.5, scale: 1, ease: 'Back.easeOut'});
        ttl.to('#bag', {duration: 0.5, scale: 0.6, left: '60%', top: '75%', marginLeft: -204, ease: 'ease', delay: 3});
        ttl.to('#notiBox', {duration: 0.5, alpha: 1, ease: 'Back.easeOut', delay: 5});
        ttl.to('#noti', {duration: 0.5, scale: 1, alpha: 1, ease: 'Back.easeOut'});
        ttl.to('#bag', {duration: 0.5, left: '50%', top: '50%', scale: 0.8, marginLeft: -85,marginTop: -111, ease: 'ease', delay: -1.5});
        ttl.to('#shadow', {duration: 1, scale: 1, alpha: 1, ease: 'Back.easeOut', delay: -1});
        ttl.to('#notiSmallSpot', {duration: 0.5, y: 0, alpha: 1, ease: 'Back.easeOut', delay: -0.5});
        ttl.to('#btnStep01', {duration: 0.5, alpha: 1, display:'flex', ease: 'ease', delay: -0.5});

        // d-box
        dtl.to('#dtalk01', {duration: 0.5, alpha: 1, ease: 'ease', delay: 3});
        dtl.to('#dtalk01', {duration: 0.5, alpha: 0, ease: 'ease', delay: 2});
        dtl.to('#dtalk02', {duration: 0.5, alpha: 1, ease: 'ease', delay: 0});
        dtl.to('#dPhone', {duration: 0.3, alpha: 1, y: 0, ease: 'ease'});
        dtl.to('#bicSpot', {duration: 0.3, alpha: 1, y: 0, ease: 'ease', delay: -0.3});
        dtl.to('#dLineRed', {duration: 0.3, alpha: 1, y: 0, ease: 'ease'});
        dtl.to('#smallSpot', {duration: 0.3, alpha: 1, y: 0, ease: 'ease'});
        dtl.to('#smallSpot', {duration: 0.6, y: 5, yoyo: true, repeat: -1, delay: 0.5});
        dtl.to('#dPhoneBox', {duration: 0.3, autoAlpha: 0, delay: 2});

        // c-box
        ctl.to('#cBox', {height: '55%', duration: 0.5, delay: 2});
        ctl.to('#ctalk01', {duration: 0.5, alpha: 1, ease: 'ease', delay: 1});
        ctl.to('#ctalk01', {duration: 0.5, alpha: 0, ease: 'ease', delay: 1.5});
        ctl.to('#ctalk02', {duration: 0.5, alpha: 1, ease: 'ease', delay: 0});
        ctl.to('#cPhone', {duration: 0.3, alpha: 1, y: 0, ease: 'ease', delay:0.5});
        ctl.to('#cLineRed', {duration: 0.3, alpha: 1, y: 0, ease: 'ease', delay: 0});
        ctl.to('#smallBag', {duration: 0.3, alpha: 1, y: 0, ease: 'ease', delay: -0.3});
        ctl.to('#smallBag', {duration: 0.6, y: 5, yoyo: true, repeat: -1, delay: 0.5});
        ctl.to('#cPhoneBox', {duration: 0.3, autoAlpha: 0, delay: 1.5});
        ctl.to('#cBox', {height: '0%', duration: 1, delay: 0});
    }
    _public.motion02 = function () {
        txtTl.to('#mainTit', {duration: 0.5, text: '상세 내용을 조율하고', ease: 'ease', delay: 0})
        // txtTl.to('#mainTit', {duration: 0.5, text: '미션을 수행해요', ease: 'ease', delay: 3})
        ttl.to('#btnStep01', {duration: 0.5, autoAlpha: 0, display:'none', ease: 'ease', delay: 0});
        ttl.to('#notiBox', {duration: 0.5, autoAlpha: 0, ease: 'ease', delay: -0.5});
        ttl.to('#notiSmallSpot', {duration: 0.5, autoAlpha: 0, ease: 'ease', delay: -0.5});
        ttl.to('#bag', {duration: 0.5, autoAlpha: 0, ease: 'ease', delay: -1});
        ttl.to('#chatBox', {duration: 1, autoAlpha: 1, display: 'block', ease: 'ease', delay: -0.6});
        ttl.to('#btnStep02', {duration: 0.5, alpha: 0, display:'none', ease: 'ease', delay: 2, oncomplete: _public.motion03});

        ctl.to('#cBox', {height: '120%', duration: 2, delay: 2.2});
    }
    _public.motion03 = function () {
        ctl.to('#cBox', {height: '0', duration: 1, delay: 2.1});
        txtTl.to('#mainTit', {duration: 0.5, text: '약속 시간에 맞춰<br>미션을 수행해요', ease: 'ease', delay: 1.5})
        txtTl.to('#mainTit', {duration: 0.5, text: '미션 수행 후<br>사진으로 인증하면', ease: 'ease', delay: 4.5})
        txtTl.to('#mainTit', {duration: 0.3, text: '에코페이머니가 지급되어요 :)', ease: 'ease', delay: 2.5})

        ttl.to('#btnStep02', {duration: 0.5, alpha: 0, display:'none', ease: 'ease', delay: -1.5});
        ttl.to('#chatBox', {duration: 1, autoAlpha: 0, display: 'none', ease: 'ease', delay: 1});
        ttl.to('#movBg', {duration: 1, autoAlpha: 1, display: 'block', ease: 'ease', delay: -1});
        ttl.to('#movingBg', {duration: 1, autoAlpha: 1, display: 'block', ease: 'ease', delay: -1});
        ttl.to('#bag', {duration: 0.5, autoAlpha: 1, scale:1.2, display: 'block', ease: 'Back.easeOut', delay: -1});
        ttl.to('#movBox', {duration: 1, autoAlpha: 0, ease: 'ease', delay: 3});
        ttl.to('#yellowShadow', {duration: 0.5, autoAlpha:1, scale: 1, ease: 'Back.easeOut', delay: 0});
        ttl.to('#bag', {duration: 0.3, x: 30, y: -30, scale:0.7, ease: 'ease', delay: -0.5});
        ttl.to('#camera', {duration: 0.5, autoAlpha:1, ease: 'ease', delay: -1});
        ttl.to('#focus', {duration: 0.5, autoAlpha:1, scale: 1, ease: 'Back.easeOut', delay: 0});
        ttl.to('#cameraBag', {duration: 3, autoAlpha:1, ease: 'ease', delay: 0});
        ttl.to('#yellowShadow', {duration: 0.5, autoAlpha:0, ease: 'ease', delay: -1});
        ttl.to('#bag', {duration: 0.5, autoAlpha:0, ease: 'ease', delay: -1.5});
        ttl.to('#cameraBox', {duration: 0.5, autoAlpha:0, ease: 'ease', delay: -1.5});


        // ctl.to('#cBox', {height: '0', duration: 1, delay: 0}); //임시
        ttl.to('#cBox', {height: '55%', duration: 0.5, delay: -1});
        ttl.to('#moneyShadow', {duration: 0.3, autoAlpha:1, scale: 1, ease: 'Back.easeOut', delay: -0.5});
        ttl.to('#bicMoney', {duration: 0.5, autoAlpha:1, scale: 1, ease: 'Back.easeOut', delay: -0.8});
        if (md.os() === 'iOS') {
            ttl.to('#btnStep03', {duration: 0.5, alpha: 1, display:'flex', ease: 'ease', delay: 0.2});
        } else {
            ttl.to('#btnStep04', {duration: 0.5, alpha: 1, display:'flex', ease: 'ease', delay: 0.2});
        }
    }
    return _public;
})();

//init
GAGIM.init();