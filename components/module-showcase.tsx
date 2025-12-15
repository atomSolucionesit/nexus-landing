"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Package,
  ShoppingCart,
  Truck,
  Globe,
  BarChart3,
  Users,
  Boxes,
  ArrowRightLeft,
  AlertTriangle,
  CreditCard,
  FileText,
  TrendingUp,
  ShoppingBag,
  PackageCheck,
  Store,
  Share2,
  LayoutDashboard,
  DollarSign,
  FileBarChart,
  UserPlus,
  ShieldCheck,
  FileSearch,
  X,
  ChevronRight,
  Monitor,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import modulesData from "@/utils/modules-data.json";

const iconMap = {
  package: Package,
  "shopping-cart": ShoppingCart,
  truck: Truck,
  globe: Globe,
  "bar-chart-3": BarChart3,
  users: Users,
  boxes: Boxes,
  "arrow-right-left": ArrowRightLeft,
  "alert-triangle": AlertTriangle,
  "credit-card": CreditCard,
  "file-text": FileText,
  "trending-up": TrendingUp,
  "shopping-bag": ShoppingBag,
  "package-check": PackageCheck,
  store: Store,
  "share-2": Share2,
  "layout-dashboard": LayoutDashboard,
  "dollar-sign": DollarSign,
  "file-bar-chart": FileBarChart,
  "user-plus": UserPlus,
  "shield-check": ShieldCheck,
  "file-search": FileSearch,
};

interface ModuleItem {
  id: string;
  label: string;
  icon: string;
  description: string;
  images: {
    desktop: string;
    mobile: string;
  };
}

interface Module {
  id: string;
  label: string;
  icon: string;
  description: string;
  images: {
    desktop: string;
    mobile: string;
  };
  items: ModuleItem[];
}

export function ModuleShowcase() {
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [selectedItem, setSelectedItem] = useState<ModuleItem | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");

  const modules: Module[] = modulesData.modules;

  const getIcon = (iconName: string) => {
    return iconMap[iconName as keyof typeof iconMap] || Package;
  };

  const openShowcase = (module: Module) => {
    setSelectedModule(module);
    setSelectedItem(module.items[0] || null);
    setIsOpen(true);
  };

  const closeShowcase = () => {
    setIsOpen(false);
    setSelectedModule(null);
    setSelectedItem(null);
  };

  return (
    <>
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Explorá los módulos de Nexus
            </h2>
            <p className="text-base sm:text-xl text-gray-600">
              Descubrí cómo cada módulo puede transformar la gestión de tu
              negocio
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {modules.map((module) => {
              const Icon = getIcon(module.icon);
              return (
                <Card
                  key={module.id}
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  onClick={() => openShowcase(module)}
                >
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                          {module.label}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          {module.items.length} funciones
                        </Badge>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-3 sm:mb-4 leading-relaxed">
                      {module.description}
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Ver módulo <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal Showcase */}
      {isOpen && selectedModule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeShowcase}
          />

          {/* Modal Content */}
          <div className="relative bg-white rounded-xl shadow-2xl max-w-6xl w-full mx-2 sm:mx-4 max-h-[95vh] sm:max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b bg-gray-50">
              <div className="flex items-center min-w-0 flex-1">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                  {(() => {
                    const Icon = getIcon(selectedModule.icon);
                    return <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />;
                  })()}
                </div>
                <div className="min-w-0">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 truncate">
                    {selectedModule.label}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">
                    {selectedModule.description}
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={closeShowcase} className="flex-shrink-0">
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>

            <div className="flex flex-col lg:flex-row h-[calc(95vh-80px)] sm:h-[calc(90vh-120px)]">
              {/* Sidebar */}
              <div className="w-full lg:w-80 border-b lg:border-b-0 lg:border-r bg-gray-50 overflow-y-auto max-h-48 lg:max-h-none">
                <div className="p-3 sm:p-4">
                  <h3 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">
                    Funcionalidades
                  </h3>
                  <div className="space-y-1 sm:space-y-2 lg:block hidden">
                    {selectedModule.items.map((item) => {
                      const ItemIcon = getIcon(item.icon);
                      return (
                        <button
                          key={item.id}
                          className={`w-full text-left p-2 sm:p-3 rounded-lg transition-colors ${
                            selectedItem?.id === item.id
                              ? "bg-blue-100 border-blue-200 border"
                              : "hover:bg-gray-100"
                          }`}
                          onClick={() => setSelectedItem(item)}
                        >
                          <div className="flex items-center">
                            <ItemIcon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
                            <div className="min-w-0">
                              <div className="font-medium text-gray-900 text-sm sm:text-base truncate">
                                {item.label}
                              </div>
                              <div className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                                {item.description}
                              </div>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  {/* Mobile horizontal scroll */}
                  <div className="flex gap-2 overflow-x-auto pb-2 lg:hidden">
                    {selectedModule.items.map((item) => {
                      const ItemIcon = getIcon(item.icon);
                      return (
                        <button
                          key={item.id}
                          className={`flex-shrink-0 p-2 rounded-lg transition-colors min-w-[120px] ${
                            selectedItem?.id === item.id
                              ? "bg-blue-100 border-blue-200 border"
                              : "hover:bg-gray-100"
                          }`}
                          onClick={() => setSelectedItem(item)}
                        >
                          <div className="text-center">
                            <ItemIcon className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                            <div className="font-medium text-gray-900 text-xs truncate">
                              {item.label}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
                {selectedItem && (
                  <div>
                    <div className="mb-4 sm:mb-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                        {selectedItem.label}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        {selectedItem.description}
                      </p>
                    </div>

                    {/* Image Tabs */}
                    <Tabs
                      value={viewMode}
                      onValueChange={(value) =>
                        setViewMode(value as "desktop" | "mobile")
                      }
                      className="w-full"
                    >
                      <TabsList className="grid w-full grid-cols-2 mb-4 sm:mb-6">
                        <TabsTrigger
                          value="desktop"
                          className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm"
                        >
                          <Monitor className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="hidden sm:inline">Desktop</span>
                          <span className="sm:hidden">PC</span>
                        </TabsTrigger>
                        <TabsTrigger
                          value="mobile"
                          className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm"
                        >
                          <Smartphone className="h-3 w-3 sm:h-4 sm:w-4" />
                          Mobile
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="desktop">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-4 sm:p-8 text-center">
                          <div className="bg-white/50 rounded-lg p-2 border-2 border-dashed border-blue-200 aspect-video flex items-center justify-center">
                            <div className="text-center w-full h-full">
                              <img
                                src={selectedItem.images.desktop}
                                alt={`${selectedItem.label} - Vista desktop de ${selectedModule.label} en Nexus CRM`}
                                className="object-contain w-full h-full rounded"
                              />
                            </div>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="mobile">
                        <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg p-4 sm:p-8 text-center">
                          <div className="bg-white/50 rounded-lg p-2 border-2 border-dashed border-green-200 aspect-[9/16] max-w-xs sm:max-w-sm mx-auto flex items-center justify-center">
                            <div className="text-center w-full h-full">
                              <img
                                src={selectedItem.images.mobile}
                                alt={`${selectedItem.label} - Vista móvil de ${selectedModule.label} en Nexus CRM`}
                                className="object-contain w-full h-full rounded"
                              />
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>

                    {/* Features List */}
                    <div className="mt-6 sm:mt-8">
                      <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">
                        Características principales:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                          <div>
                            <div className="font-medium text-gray-900 text-sm sm:text-base">
                              Interfaz intuitiva
                            </div>
                            <div className="text-xs sm:text-sm text-gray-600">
                              Diseño moderno y fácil de usar
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                          <div>
                            <div className="font-medium text-gray-900 text-sm sm:text-base">
                              Tiempo real
                            </div>
                            <div className="text-xs sm:text-sm text-gray-600">
                              Actualizaciones instantáneas
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                          <div>
                            <div className="font-medium text-gray-900 text-sm sm:text-base">
                              Reportes detallados
                            </div>
                            <div className="text-xs sm:text-sm text-gray-600">
                              Análisis completo de datos
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                          <div>
                            <div className="font-medium text-gray-900 text-sm sm:text-base">
                              Integración completa
                            </div>
                            <div className="text-xs sm:text-sm text-gray-600">
                              Conecta con otros módulos
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
