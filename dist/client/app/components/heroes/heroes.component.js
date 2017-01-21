System.register(["@angular/core", "../../services/hero.service", "@angular/router"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, hero_service_1, router_1, HeroesComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            HeroesComponent = (function () {
                function HeroesComponent(router, heroService) {
                    this.router = router;
                    this.heroService = heroService;
                }
                HeroesComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
                };
                HeroesComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                HeroesComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
                HeroesComponent.prototype.gotoDetail = function () {
                    this.router.navigate(['/detail', this.selectedHero._id]);
                };
                HeroesComponent.prototype.addHero = function () {
                    this.selectedHero = null;
                    this.router.navigate(['/detail', 'new']);
                };
                HeroesComponent.prototype.deleteHero = function (hero, event) {
                    var _this = this;
                    event.stopPropagation();
                    this.heroService
                        .delete(hero)
                        .then(function (res) {
                        _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
                        if (_this.selectedHero === hero) {
                            _this.selectedHero = null;
                        }
                    })
                        .catch(function (error) { return _this.error = error; });
                };
                return HeroesComponent;
            }());
            HeroesComponent = __decorate([
                core_1.Component({
                    selector: 'my-heroes',
                    templateUrl: './app/components/heroes/heroes.component.html'
                }),
                __metadata("design:paramtypes", [router_1.Router,
                    hero_service_1.HeroService])
            ], HeroesComponent);
            exports_1("HeroesComponent", HeroesComponent);
        }
    };
});

//# sourceMappingURL=heroes.component.js.map
