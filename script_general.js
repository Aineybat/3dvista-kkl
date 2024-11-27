(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"children":["this.MainViewer","this.HTMLText_46C66B67_5434_974D_41C8_A57868862DEF","this.HTMLText_47F1BC75_542D_714D_411D_67F3C8259FC8","this.HTMLText_47A7039F_5434_97FD_41D4_BCAEE41A659E","this.IconButton_6BD0454A_641D_324F_41CF_7048C111A4C5"],"defaultMenu":["fullscreen","mute","rotation"],"minHeight":0,"minWidth":0,"id":"rootPlayer","start":"this.playAudioList([this.audio_65033E6B_680B_ECC2_41C2_B3D8735A859B], true); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_6BD0454A_641D_324F_41CF_7048C111A4C5], 'cardboardAvailable'); this.syncPlaylists([this.PlayList_7FBB8AB7_6ECB_5158_41BD_EDEFC0DBB525,this.mainPlayList])","data":{"displayTooltipInTouchScreens":true,"locales":{"en":"locale/en.txt"},"defaultLocale":"en","textToSpeechConfig":{"pitch":1,"rate":1,"speechOnTooltip":false,"volume":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"speechOnQuizQuestion":false},"name":"Player2369","history":{}},"backgroundColor":["#FFFFFF"],"class":"Player","hash": "816865c66ba1a2b2db023437c742d830dd94c4fd91ab0112010ce507b4d857b1", "definitions": [{"paddingTop":10,"paddingBottom":10,"borderSize":3,"minHeight":1,"minWidth":1,"id":"HTMLText_47F1BC75_542D_714D_411D_67F3C8259FC8","left":"24.66%","backgroundOpacity":0,"data":{"name":"HTMLText1580"},"class":"HTMLText","paddingLeft":10,"scrollBarColor":"#000000","paddingRight":10,"scrollBarMargin":2,"top":"1.98%","height":"12.569%","width":"20.463%","borderColor":"#000000","html":trans('HTMLText_47F1BC75_542D_714D_411D_67F3C8259FC8.html',null,{'quiz.question.count':regTextVar('HTMLText_47F1BC75_542D_714D_411D_67F3C8259FC8.html', 'quiz.question.count'),'quiz.questions.answered':regTextVar('HTMLText_47F1BC75_542D_714D_411D_67F3C8259FC8.html', 'quiz.questions.answered')}),"propagateClick":false},{"playbackBarBackgroundColorDirection":"vertical","toolTipShadowColor":"#333138","propagateClick":false,"playbackBarRight":0,"vrPointerColor":"#FFFFFF","playbackBarProgressBorderRadius":0,"vrThumbstickRotationStep":20,"playbackBarProgressBackgroundColor":["#3399FF"],"minHeight":50,"playbackBarBackgroundOpacity":1,"subtitlesTextShadowHorizontalLength":1,"minWidth":100,"progressHeight":2,"left":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadShadowOpacity":0.7,"subtitlesBottom":50,"data":{"name":"Main Viewer"},"class":"ViewerArea","subtitlesFontFamily":"Arial","progressBarBorderRadius":2,"progressLeft":"33%","progressBorderSize":0,"playbackBarProgressBackgroundColorRatios":[0],"firstTransitionDuration":0,"playbackBarBorderColor":"#FFFFFF","progressBarBorderSize":0,"playbackBarBorderRadius":0,"subtitlesTop":0,"playbackBarProgressBorderColor":"#000000","playbackBarHeadShadowBlurRadius":3,"surfaceReticleColor":"#FFFFFF","progressBackgroundColorRatios":[0],"playbackBarHeadBorderRadius":0,"playbackBarHeadHeight":15,"playbackBarLeft":0,"playbackBarHeadShadowColor":"#000000","progressRight":"33%","toolTipFontSize":"1.11vmin","playbackBarHeadBorderColor":"#000000","progressOpacity":0.7,"subtitlesTextShadowColor":"#000000","toolTipPaddingBottom":4,"playbackBarBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadow":true,"vrPointerSelectionColor":"#FF6600","toolTipPaddingTop":4,"subtitlesGap":0,"toolTipFontFamily":"Arial","playbackBarHeadBorderSize":0,"toolTipPaddingLeft":6,"progressBarBackgroundColorDirection":"horizontal","subtitlesBackgroundColor":"#000000","progressBarBorderColor":"#000000","subtitlesFontSize":"3vmin","toolTipFontColor":"#606060","id":"MainViewer","subtitlesBackgroundOpacity":0.2,"subtitlesTextShadowOpacity":1,"subtitlesBorderColor":"#FFFFFF","vrPointerSelectionTime":2000,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"progressBarBackgroundColorRatios":[0],"progressBorderColor":"#000000","subtitlesTextShadowVerticalLength":1,"toolTipBorderColor":"#767676","progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#000000"],"top":0,"subtitlesFontColor":"#FFFFFF","toolTipPaddingRight":6,"playbackBarHeight":10,"playbackBarBackgroundColor":["#FFFFFF"],"height":"100%","width":"100%","progressBorderRadius":2,"toolTipTextShadowColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","playbackBarProgressBorderSize":0,"progressBottom":10,"playbackBarHeadWidth":6},{"touchControlMode":"drag_rotation","class":"PanoramaPlayer","aaEnabled":true,"buttonCardboardView":"this.IconButton_6BD0454A_641D_324F_41CF_7048C111A4C5","viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","displayPlaybackBar":true,"id":"MainViewerPanoramaPlayer","arrowKeysAction":"translate"},{"paddingTop":10,"paddingBottom":10,"borderSize":3,"minHeight":1,"minWidth":1,"id":"HTMLText_46C66B67_5434_974D_41C8_A57868862DEF","data":{"name":"HTMLText1580"},"backgroundOpacity":0,"class":"HTMLText","right":"1.56%","paddingLeft":10,"scrollBarColor":"#000000","paddingRight":10,"scrollBarMargin":2,"top":"0.66%","height":"12.569%","width":"15.707%","borderColor":"#000000","html":trans('HTMLText_46C66B67_5434_974D_41C8_A57868862DEF.html',null,{'quiz.time.remaining':regTextVar('HTMLText_46C66B67_5434_974D_41C8_A57868862DEF.html', 'quiz.time.remaining')}),"propagateClick":false},{"adjacentPanoramas":[{"data":{"overlayID":"overlay_5ACCBC1B_5435_B0C5_419F_A9BA8E98AC6E"},"panorama":"this.panorama_5FFF650D_5434_F0DD_41CB_2BE74FB1E0A9","yaw":86.81,"distance":14.21,"select":"this.overlay_5ACCBC1B_5435_B0C5_419F_A9BA8E98AC6E.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","backwardYaw":-93.81}],"hfovMax":130,"label":trans('panorama_597F3F10_5434_90C4_41D1_2BAC6CE1AABB.label'),"vfov":180,"hfovMin":"150%","thumbnailUrl":"media/panorama_597F3F10_5434_90C4_41D1_2BAC6CE1AABB_t.jpg","overlays":["this.overlay_5ACCBC1B_5435_B0C5_419F_A9BA8E98AC6E","this.overlay_5B8F6452_5434_B147_41C6_324B2A43611E","this.overlay_44C1A33D_5437_973D_41D1_8FB75D1F38F7","this.overlay_5BC78C34_543C_90CC_41C1_61B8CD612A80","this.overlay_441F7DCE_543D_735C_41B4_F5824FECECE8"],"id":"panorama_597F3F10_5434_90C4_41D1_2BAC6CE1AABB","cardboardMenu":"this.Menu_6FFFC990_63F8_D062_41D1_CF58FDCEEED7","data":{"label":"scene1"},"class":"Panorama","hfov":360,"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_597F3F10_5434_90C4_41D1_2BAC6CE1AABB_t.jpg","cube":{"class":"ImageResource","levels":[{"width":9216,"url":"media/panorama_597F3F10_5434_90C4_41D1_2BAC6CE1AABB_0/{face}/0/{row}_{column}.jpg","height":1536,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":3,"colCount":18},{"width":6144,"url":"media/panorama_597F3F10_5434_90C4_41D1_2BAC6CE1AABB_0/{face}/1/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":2,"colCount":12},{"width":3072,"url":"media/panorama_597F3F10_5434_90C4_41D1_2BAC6CE1AABB_0/{face}/2/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"rowCount":1,"colCount":6}]}}]},{"adjacentPanoramas":[{"data":{"overlayID":"overlay_464905A8_5435_73C3_41D2_2D6B3AB3BB0C"},"panorama":"this.panorama_597F3F10_5434_90C4_41D1_2BAC6CE1AABB","yaw":-93.81,"distance":8.45,"select":"this.overlay_464905A8_5435_73C3_41D2_2D6B3AB3BB0C.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","backwardYaw":86.81}],"hfovMax":130,"label":trans('panorama_5FFF650D_5434_F0DD_41CB_2BE74FB1E0A9.label'),"vfov":180,"hfovMin":"150%","thumbnailUrl":"media/panorama_5FFF650D_5434_F0DD_41CB_2BE74FB1E0A9_t.jpg","overlays":["this.overlay_464905A8_5435_73C3_41D2_2D6B3AB3BB0C"],"id":"panorama_5FFF650D_5434_F0DD_41CB_2BE74FB1E0A9","cardboardMenu":"this.Menu_6FFFC990_63F8_D062_41D1_CF58FDCEEED7","data":{"label":"scene2"},"class":"Panorama","hfov":360,"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_5FFF650D_5434_F0DD_41CB_2BE74FB1E0A9_t.jpg","cube":{"class":"ImageResource","levels":[{"width":9216,"url":"media/panorama_5FFF650D_5434_F0DD_41CB_2BE74FB1E0A9_0/{face}/0/{row}_{column}.jpg","height":1536,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":3,"colCount":18},{"width":6144,"url":"media/panorama_5FFF650D_5434_F0DD_41CB_2BE74FB1E0A9_0/{face}/1/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":2,"colCount":12},{"width":3072,"url":"media/panorama_5FFF650D_5434_F0DD_41CB_2BE74FB1E0A9_0/{face}/2/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"rowCount":1,"colCount":6}]}}]},{"horizontalAlign":"center","minHeight":1,"verticalAlign":"middle","minWidth":1,"id":"IconButton_6BD0454A_641D_324F_41CF_7048C111A4C5","data":{"name":"IconButton4277"},"backgroundOpacity":0.3,"backgroundColor":[],"class":"IconButton","right":"3.82%","backgroundColorRatios":[],"tabIndex":0,"interactionEnabled":false,"bottom":"4.3%","width":127,"height":77,"iconURL":"skin/IconButton_6BD0454A_641D_324F_41CF_7048C111A4C5.png","propagateClick":false},{"items":[{"camera":"this.panorama_597F3F10_5434_90C4_41D1_2BAC6CE1AABB_camera","media":"this.panorama_597F3F10_5434_90C4_41D1_2BAC6CE1AABB","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","begin":"this.enableVR(); this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"camera":"this.panorama_5FFF650D_5434_F0DD_41CB_2BE74FB1E0A9_camera","media":"this.panorama_5FFF650D_5434_F0DD_41CB_2BE74FB1E0A9","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","begin":"this.enableVR(); this.quizShowQuestion('question_45BC7F64_543C_8F4C_41CA_044E6E2E2CDF').then(function(r){  if(r && r.length == 0) return;  }.bind(this)); this.quizShowQuestion('question_45AC63BA_543F_F7C4_41B2_04A40FCE934F').then(function(r){  if(r && r.length == 0) return;  }.bind(this)); this.setEndToItemIndex(this.mainPlayList, 1, 0)"}],"class":"PlayList","id":"mainPlayList"},{"selectedBackgroundColor":"#202020","opacity":0.4,"fontColor":"#FFFFFF","fontFamily":"Arial","backgroundColor":"#404040","selectedFontColor":"#FFFFFF","class":"Menu","children":["this.MenuItem_6FF9C9B3_63F8_D3A6_41D1_F421EDCDDD81","this.MenuItem_6FF9B9B3_63F8_D3A6_41D2_F1877B535273"],"rollOverOpacity":0.8,"label":trans('Menu_6FFFC990_63F8_D062_41D1_CF58FDCEEED7.label'),"rollOverFontColor":"#FFFFFF","distance":2,"rollOverBackgroundColor":"#000000","id":"Menu_6FFFC990_63F8_D062_41D1_CF58FDCEEED7"},{"enterPointingToHorizon":true,"initialSequence":"this.sequence_5F96D910_5434_F0C3_41B2_81CB64E4CF86","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"class":"PanoramaCamera","id":"panorama_5FFF650D_5434_F0DD_41CB_2BE74FB1E0A9_camera"},{"paddingTop":10,"paddingBottom":10,"borderSize":3,"minHeight":1,"minWidth":1,"id":"HTMLText_47A7039F_5434_97FD_41D4_BCAEE41A659E","left":"1.38%","backgroundOpacity":0,"data":{"name":"HTMLText1580"},"class":"HTMLText","paddingLeft":10,"scrollBarColor":"#000000","paddingRight":10,"scrollBarMargin":2,"top":"2.09%","height":"7.718%","width":"22.528%","borderColor":"#000000","html":trans('HTMLText_47A7039F_5434_97FD_41D4_BCAEE41A659E.html',null,{'quiz.score.total':regTextVar('HTMLText_47A7039F_5434_97FD_41D4_BCAEE41A659E.html', 'quiz.score.total'),'quiz.score':regTextVar('HTMLText_47A7039F_5434_97FD_41D4_BCAEE41A659E.html', 'quiz.score')}),"propagateClick":false},{"data":{"label":"y2mate.com - FOREST AMBIENCE  SOUND EFFECTS  HIGH QUALITY  NO COPYRIGHT"},"autoplay":true,"audio":"this.audiores_78F44144_680E_D4C6_419E_8D6EA3CDAF62","class":"MediaAudio","id":"audio_65033E6B_680B_ECC2_41C2_B3D8735A859B"},{"enterPointingToHorizon":true,"initialSequence":"this.sequence_5F8A890B_5434_F0C4_41D2_CCEFBDD668D2","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"class":"PanoramaCamera","id":"panorama_597F3F10_5434_90C4_41D1_2BAC6CE1AABB_camera"},{"items":[{"media":"this.panorama_597F3F10_5434_90C4_41D1_2BAC6CE1AABB","class":"PanoramaPlayListItem"},{"media":"this.panorama_5FFF650D_5434_F0DD_41CB_2BE74FB1E0A9","class":"PanoramaPlayListItem"}],"class":"PlayList","id":"PlayList_7FBB8AB7_6ECB_5158_41BD_EDEFC0DBB525"},{"data":{"label":"Arrow 01c","hasPanoramaAction":true},"id":"overlay_5ACCBC1B_5435_B0C5_419F_A9BA8E98AC6E","items":[{"pitch":-6.81,"yaw":86.81,"distance":100,"image":"this.AnimatedImageResource_7FB0C9D6_6ECB_52DB_41C4_1B8A8AA912C8","class":"HotspotPanoramaOverlayImage","vfov":5.73,"scaleMode":"fit_inside","hfov":10.5,"data":{"label":"Arrow 01c"}}],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_5AAF5C49_5435_B145_41AD_7A76156EBDA5"],"useHandCursor":true,"maps":[]},{"data":{"label":"Text"},"id":"overlay_5B8F6452_5434_B147_41C6_324B2A43611E","items":["this.HotspotPanoramaOverlayTextImage_5B82C44E_5434_B15C_41CF_BED7D0B98E3F"],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_5B0884A7_5434_B1CC_41C7_110CB688F5C1"],"useHandCursor":true,"maps":[]},{"data":{"label":"Text"},"id":"overlay_44C1A33D_5437_973D_41D1_8FB75D1F38F7","items":["this.HotspotPanoramaOverlayTextImage_44C1333C_5437_90C3_41C4_DA2A9224CA32"],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_44CE633F_5437_973D_41C1_8F78BF42707D"],"useHandCursor":true,"maps":[]},{"data":{"label":"Text"},"id":"overlay_5BC78C34_543C_90CC_41C1_61B8CD612A80","items":["this.HotspotPanoramaOverlayTextImage_5BC34C33_543C_90C4_41B6_E83D7D6C2D51"],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_5BE54C44_543C_914C_41D2_FB41E0C1B0BA"],"useHandCursor":true,"maps":[]},{"data":{"label":"Text"},"id":"overlay_441F7DCE_543D_735C_41B4_F5824FECECE8","items":["this.HotspotPanoramaOverlayTextImage_441F4DCD_543D_735C_41C6_B5E0C5A932A7"],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_44112DE5_543D_734D_41C4_98E4A147025A"],"useHandCursor":true,"maps":[]},{"data":{"label":"GoToScene1","hasPanoramaAction":true},"id":"overlay_464905A8_5435_73C3_41D2_2D6B3AB3BB0C","items":[{"pitch":-11.36,"yaw":-93.81,"distance":100,"image":"this.AnimatedImageResource_7FB7B9D8_6ECB_52D7_41CD_D0402D719A8E","class":"HotspotPanoramaOverlayImage","vfov":5.73,"scaleMode":"fit_inside","hfov":10.5,"data":{"label":"GoToScene1"}}],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_460265BD_5435_733C_4189_4C1FEF5E8408"],"useHandCursor":true,"maps":[]},{"class":"MenuItem","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","label":trans('MenuItem_6FF9C9B3_63F8_D3A6_41D1_F421EDCDDD81.label'),"id":"MenuItem_6FF9C9B3_63F8_D3A6_41D1_F421EDCDDD81"},{"class":"MenuItem","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","label":trans('MenuItem_6FF9B9B3_63F8_D3A6_41D2_F1877B535273.label'),"id":"MenuItem_6FF9B9B3_63F8_D3A6_41D2_F1877B535273"},{"movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96}],"class":"PanoramaCameraSequence","id":"sequence_5F96D910_5434_F0C3_41B2_81CB64E4CF86"},{"class":"AudioResource","mp3Url":trans('audiores_78F44144_680E_D4C6_419E_8D6EA3CDAF62.mp3Url'),"id":"audiores_78F44144_680E_D4C6_419E_8D6EA3CDAF62"},{"movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96}],"class":"PanoramaCameraSequence","id":"sequence_5F8A890B_5434_F0C4_41D2_CCEFBDD668D2"},{"id":"AnimatedImageResource_7FB0C9D6_6ECB_52DB_41C4_1B8A8AA912C8","class":"AnimatedImageResource","rowCount":3,"finalFrame":"first","levels":[{"width":330,"url":"media/res_45EA87C6_5434_9F4C_41BC_995124CCBB43_0.png","height":180,"class":"ImageResourceLevel"}],"frameDuration":62,"colCount":3,"frameCount":9},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"any","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_5AAF5C49_5435_B145_41AD_7A76156EBDA5"},{"distance":50,"image":{"class":"ImageResource","levels":["this.imlevel_45F91879_5434_9144_41D0_EA7BEA97FDA7"]},"vfov":10.5,"pitch":13.87,"yaw":-86.77,"data":{"label":"Text"},"class":"HotspotPanoramaOverlayImage","hfov":62.97,"id":"HotspotPanoramaOverlayTextImage_5B82C44E_5434_B15C_41CF_BED7D0B98E3F"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_5B0884A7_5434_B1CC_41C7_110CB688F5C1"},{"distance":50,"image":{"class":"ImageResource","levels":["this.imlevel_45BCB8B4_5434_91CC_41B9_C38CC4C41EDF"]},"vfov":2.48,"pitch":8.88,"yaw":-88.17,"data":{"label":"Text"},"class":"HotspotPanoramaOverlayImage","hfov":23.76,"id":"HotspotPanoramaOverlayTextImage_44C1333C_5437_90C3_41C4_DA2A9224CA32"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_44CE633F_5437_973D_41C1_8F78BF42707D"},{"distance":50,"image":{"class":"ImageResource","levels":["this.imlevel_45A308CB_5434_9145_41D3_3308F8A2F569"]},"vfov":13.78,"pitch":-5.87,"yaw":30.1,"data":{"label":"Text"},"class":"HotspotPanoramaOverlayImage","hfov":36.47,"id":"HotspotPanoramaOverlayTextImage_5BC34C33_543C_90C4_41B6_E83D7D6C2D51"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_5BE54C44_543C_914C_41D2_FB41E0C1B0BA"},{"distance":50,"image":{"class":"ImageResource","levels":["this.imlevel_45BEA909_5434_90C5_41D1_0AFB3857A3C4"]},"vfov":13.08,"pitch":-7.32,"yaw":136.27,"data":{"label":"Text"},"class":"HotspotPanoramaOverlayImage","hfov":38.81,"id":"HotspotPanoramaOverlayTextImage_441F4DCD_543D_735C_41C6_B5E0C5A932A7"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_44112DE5_543D_734D_41C4_98E4A147025A"},{"id":"AnimatedImageResource_7FB7B9D8_6ECB_52D7_41CD_D0402D719A8E","class":"AnimatedImageResource","rowCount":3,"finalFrame":"first","levels":[{"width":330,"url":"media/res_45EA87C6_5434_9F4C_41BC_995124CCBB43_0.png","height":180,"class":"ImageResourceLevel"}],"frameDuration":62,"colCount":3,"frameCount":9},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","mapColor":"any","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_460265BD_5435_733C_4189_4C1FEF5E8408"},{"width":1432.92,"url":trans('imlevel_45F91879_5434_9144_41D0_EA7BEA97FDA7.url'),"height":214.99,"class":"ImageResourceLevel","id":"imlevel_45F91879_5434_9144_41D0_EA7BEA97FDA7"},{"width":540.6,"url":trans('imlevel_45BCB8B4_5434_91CC_41B9_C38CC4C41EDF.url'),"height":55.6,"class":"ImageResourceLevel","id":"imlevel_45BCB8B4_5434_91CC_41B9_C38CC4C41EDF"},{"width":829.83,"url":trans('imlevel_45A308CB_5434_9145_41D3_3308F8A2F569.url'),"height":304.46,"class":"ImageResourceLevel","id":"imlevel_45A308CB_5434_9145_41D3_3308F8A2F569"},{"width":883.19,"url":trans('imlevel_45BEA909_5434_90C5_41D1_0AFB3857A3C4.url'),"height":287.35,"class":"ImageResourceLevel","id":"imlevel_45BEA909_5434_90C5_41D1_0AFB3857A3C4"}],"scripts":{"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"openLink":TDV.Tour.Script.openLink,"enableVR":TDV.Tour.Script.enableVR,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"clone":TDV.Tour.Script.clone,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"initQuiz":TDV.Tour.Script.initQuiz,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"existsKey":TDV.Tour.Script.existsKey,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"quizShowScore":TDV.Tour.Script.quizShowScore,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getPixels":TDV.Tour.Script.getPixels,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"registerKey":TDV.Tour.Script.registerKey,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"quizStart":TDV.Tour.Script.quizStart,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"unregisterKey":TDV.Tour.Script.unregisterKey,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getMediaByName":TDV.Tour.Script.getMediaByName,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"resumePlayers":TDV.Tour.Script.resumePlayers,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"quizFinish":TDV.Tour.Script.quizFinish,"getMainViewer":TDV.Tour.Script.getMainViewer,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"startMeasurement":TDV.Tour.Script.startMeasurement,"downloadFile":TDV.Tour.Script.downloadFile,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setValue":TDV.Tour.Script.setValue,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"init":TDV.Tour.Script.init,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"textToSpeech":TDV.Tour.Script.textToSpeech,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getComponentByName":TDV.Tour.Script.getComponentByName,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"historyGoForward":TDV.Tour.Script.historyGoForward,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"showWindow":TDV.Tour.Script.showWindow,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"historyGoBack":TDV.Tour.Script.historyGoBack,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getOverlays":TDV.Tour.Script.getOverlays,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"showPopupImage":TDV.Tour.Script.showPopupImage,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setMapLocation":TDV.Tour.Script.setMapLocation,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"disableVR":TDV.Tour.Script.disableVR,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"cloneBindings":TDV.Tour.Script.cloneBindings,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"mixObject":TDV.Tour.Script.mixObject,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"isPanorama":TDV.Tour.Script.isPanorama,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"shareSocial":TDV.Tour.Script.shareSocial,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"playAudioList":TDV.Tour.Script.playAudioList,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"toggleVR":TDV.Tour.Script.toggleVR,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getKey":TDV.Tour.Script.getKey,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"translate":TDV.Tour.Script.translate,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"createTween":TDV.Tour.Script.createTween,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"executeJS":TDV.Tour.Script.executeJS,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setLocale":TDV.Tour.Script.setLocale},"backgroundColorRatios":[0],"layout":"absolute","scrollBarColor":"#000000","scrollBarMargin":2,"downloadEnabled":true,"init":"this.initQuiz(this.PlayList_7FBB8AB7_6ECB_5158_41BD_EDEFC0DBB525, true, true); var quiz = this.get('data')['quiz']; quiz.bind('timeout', (function() { var functionCallee = function(){ this.quizShowTimeout({repeat: {visible: true}, score: {visible: true}}) }.bind(this); return functionCallee }.bind(this))()); quiz.bind('finish', (function() { var functionCallee = function(){ this.quizShowScore({canClose: true}) }.bind(this); return functionCallee }.bind(this))())","height":"100%","gap":10,"width":"100%","propagateClick":false,"watermark":false};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {"objectives":[{"label":trans('score1.label'),"id":"score1","visibleInScore":true}],"timeLimit":120,"score":{"submitToLMS":{"label":trans('quizScore_468CEACB_543C_B144_41C9_D43AEA59D04E.submitToLMS','quizScore_468CEACB_543C_B144_41C9_D43AEA59D04E.submitToLMS.label'),"visible":true},"downloadCSV":{"label":trans('quizScore_468CEACB_543C_B144_41C9_D43AEA59D04E.downloadCSV','quizScore_468CEACB_543C_B144_41C9_D43AEA59D04E.downloadCSV.label'),"visible":true},"canClose":true,"elapsedTime":{"label":trans('quizScore_468CEACB_543C_B144_41C9_D43AEA59D04E.elapsedTime','quizScore_468CEACB_543C_B144_41C9_D43AEA59D04E.elapsedTime.label'),"visible":true},"items":{"label":trans('quizScore_468CEACB_543C_B144_41C9_D43AEA59D04E.items','quizScore_468CEACB_543C_B144_41C9_D43AEA59D04E.items.label'),"visible":true},"title":trans('quizScore_468CEACB_543C_B144_41C9_D43AEA59D04E.title'),"description":trans('quizScore_468CEACB_543C_B144_41C9_D43AEA59D04E.description'),"completion":{"label":trans('quizScore_468CEACB_543C_B144_41C9_D43AEA59D04E.completion','quizScore_468CEACB_543C_B144_41C9_D43AEA59D04E.completion.label'),"visible":true},"repeat":{"label":trans('quizScore_468CEACB_543C_B144_41C9_D43AEA59D04E.repeat','quizScore_468CEACB_543C_B144_41C9_D43AEA59D04E.repeat.label'),"visible":true},"id":"quizScore_468CEACB_543C_B144_41C9_D43AEA59D04E","questions":{"incorrectLabel":trans('quizScore_468CEACB_543C_B144_41C9_D43AEA59D04E.questionsIncorrect','quizScore_468CEACB_543C_B144_41C9_D43AEA59D04E.questions.incorrectLabel'),"label":trans('quizScore_468CEACB_543C_B144_41C9_D43AEA59D04E.questions','quizScore_468CEACB_543C_B144_41C9_D43AEA59D04E.questions.label'),"visible":true,"correctLabel":trans('quizScore_468CEACB_543C_B144_41C9_D43AEA59D04E.questionsCorrect','quizScore_468CEACB_543C_B144_41C9_D43AEA59D04E.questions.correctLabel')}},"autoFinish":true,"theme":{"score":{"window":{"backgroundOpacity":1,"title":{"fontColor":"#FFFFFF"},"description":{"fontColor":"#FFFFFF"},"calification":{"fontColor":"#FFFFFF"},"stats":{"mainValue":{"fontColor":"#FFFFFF"},"label":{"fontColor":"#FFFFFF"},"secondaryValue":{"fontColor":"#FFFFFF"},"title":{"fontColor":"#FFFFFF"}},"backgroundColor":"#333333"}},"question":{"window":{"mediaContainer":{"panoramaPlayer":{"mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation"}},"backgroundOpacity":1,"option":{"text":{"fontColor":"#FFFFFF","selected":{"fontColor":"#FFFFFF"}}},"title":{"fontColor":"#FFFFFF"},"backgroundColor":"#333333"}},"timeout":{"window":{"backgroundOpacity":1,"icon":{"url":"data:image/png;base64,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"},"title":{"fontColor":"#FFFFFF"},"backgroundColor":"#333333"}}},"timeout":{"score":{"label":trans('quizTimeout_46884ACB_543C_B144_4175_ED5A0C8B05BE.score','quizTimeout_46884ACB_543C_B144_4175_ED5A0C8B05BE.score.label'),"visible":true},"title":trans('quizTimeout_46884ACB_543C_B144_4175_ED5A0C8B05BE.title'),"repeat":{"label":trans('quizTimeout_46884ACB_543C_B144_4175_ED5A0C8B05BE.repeat','quizTimeout_46884ACB_543C_B144_4175_ED5A0C8B05BE.repeat.label'),"visible":false},"id":"quizTimeout_46884ACB_543C_B144_4175_ED5A0C8B05BE"},"questions":[{"multipleChoice":false,"panorama":"this.panorama_5FFF650D_5434_F0DD_41CB_2BE74FB1E0A9","options":[{"score":1,"text":trans('questionOption_461668AA_543B_91C7_41D3_EA276BD46584.text'),"id":"questionOption_461668AA_543B_91C7_41D3_EA276BD46584"},{"score":0,"text":trans('questionOption_463C39D5_543B_934C_41B6_B6B1CD525CD3.text'),"id":"questionOption_463C39D5_543B_934C_41B6_B6B1CD525CD3"},{"score":-1,"text":trans('questionOption_46FFAC9B_543B_F1C5_4198_5D56A0737AD1.text'),"id":"questionOption_46FFAC9B_543B_F1C5_4198_5D56A0737AD1"}],"canRepeat":false,"title":trans('question_45BC7F64_543C_8F4C_41CA_044E6E2E2CDF.title'),"objective":"score1","id":"question_45BC7F64_543C_8F4C_41CA_044E6E2E2CDF","canClose":true},{"multipleChoice":false,"panorama":"this.panorama_5FFF650D_5434_F0DD_41CB_2BE74FB1E0A9","options":[{"score":-1,"text":trans('questionOption_449D88C6_543C_914C_41CD_229D93BE3C43.text'),"id":"questionOption_449D88C6_543C_914C_41CD_229D93BE3C43"},{"score":0,"text":trans('questionOption_45545A56_543C_914C_4182_7BB89E47F5DD.text'),"id":"questionOption_45545A56_543C_914C_4182_7BB89E47F5DD"},{"score":1,"text":trans('questionOption_456C2DCA_543C_9347_41C5_242C06A9981D.text'),"id":"questionOption_456C2DCA_543C_9347_41C5_242C06A9981D"}],"canRepeat":false,"title":trans('question_45AC63BA_543F_F7C4_41B2_04A40FCE934F.title'),"objective":"score1","id":"question_45AC63BA_543F_F7C4_41B2_04A40FCE934F","canClose":true}],"data":{"titlesScale":1,"bodyScale":1},"question":{"ok":trans('quizQuestion_468B3ACB_543C_B144_41C7_D92DCD0A23B7.ok'),"scoreZeroIsIncorrect":true,"id":"quizQuestion_468B3ACB_543C_B144_41C7_D92DCD0A23B7","responseDisplayTime":2000}};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.19.js.map
})();
//Generated with v2024.0.19, Wed Nov 27 2024